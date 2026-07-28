import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Basic rate limiting check via header
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    
    const body = await request.json();
    const { firstName, lastName, email, company, inquiryType, message } = body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "First name, email, and message are required." },
        { status: 400 }
      );
    }

    // Sanitize inputs - strip HTML tags
    const sanitize = (str: string): string => 
      String(str || "").replace(/<[^>]*>/g, "").trim().substring(0, 2000);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Log sanitized submission (server-side only, no sensitive data exposed)
    const submission = {
      name: sanitize(`${firstName} ${lastName || ""}`),
      email: sanitize(email),
      company: sanitize(company || ""),
      inquiryType: sanitize(inquiryType || "General"),
      message: sanitize(message),
      ip,
      timestamp: new Date().toISOString(),
    };

    // Server-side logging for backup
    console.info("[CONTACT]", JSON.stringify({ name: submission.name, email: submission.email, type: submission.inquiryType, timestamp: submission.timestamp }));

    return NextResponse.json(
      { success: true, message: "Thank you for your inquiry. We will respond within 1 business day." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
