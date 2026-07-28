import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    const body = await request.json();
    const { name, email, organization, type, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Sanitize inputs
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

    const partnerTypeLabels: Record<string, string> = {
      institutional: "Institutional Investor",
      family: "Family Office",
      corporate: "Corporate Partner",
      strategic: "Strategic Partner",
    };

    const submission = {
      name: sanitize(name),
      email: sanitize(email),
      organization: sanitize(organization || ""),
      partnerType: partnerTypeLabels[type] || sanitize(type || "Not specified"),
      message: sanitize(message || ""),
      ip,
      timestamp: new Date().toISOString(),
    };

    console.info("[PARTNER]", JSON.stringify({ name: submission.name, email: submission.email, type: submission.partnerType, timestamp: submission.timestamp }));

    return NextResponse.json(
      { success: true, message: "Thank you for your interest. Our partnership team will be in touch shortly." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
