import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, inquiryType, message } = body;

    // Validate required fields
    if (!firstName || !email) {
      return NextResponse.json(
        { error: "First name and email are required." },
        { status: 400 }
      );
    }

    // In production, this would send an email, save to DB, etc.
    console.log("Contact form submission:", { firstName, lastName, email, company, inquiryType, message });

    return NextResponse.json(
      { success: true, message: "Thank you for your inquiry. We will respond within 1 business day." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "An error occurred processing your request." },
      { status: 500 }
    );
  }
}
