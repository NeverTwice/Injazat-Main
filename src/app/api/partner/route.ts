import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const RECIPIENT_EMAIL = "services@injazatcapitals.com";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "noreply@injazatcapitals.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, organization, type, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const partnerTypeLabels: Record<string, string> = {
      institutional: "Institutional Investor",
      family: "Family Office",
      corporate: "Corporate Partner",
      strategic: "Strategic Partner",
    };

    const partnerLabel = partnerTypeLabels[type] || type || "Not specified";

    // Build the email HTML
    const emailHtml = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #050a14; color: #ffffff; padding: 40px;">
        <div style="border-bottom: 1px solid rgba(184,148,63,0.3); padding-bottom: 20px; margin-bottom: 30px;">
          <h1 style="color: #b8943f; font-size: 18px; font-weight: 500; letter-spacing: 2px; margin: 0;">INJAZAT CAPITAL</h1>
          <p style="color: rgba(255,255,255,0.4); font-size: 11px; letter-spacing: 1px; margin: 5px 0 0 0;">NEW PARTNERSHIP INQUIRY</p>
        </div>

        <div style="background: rgba(184,148,63,0.08); border: 1px solid rgba(184,148,63,0.15); padding: 15px 20px; margin-bottom: 25px;">
          <p style="color: #b8943f; font-size: 11px; letter-spacing: 1px; margin: 0; text-transform: uppercase;">Partnership Type: ${partnerLabel}</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.4); font-size: 12px; width: 140px; vertical-align: top;">Full Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.8); font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.4); font-size: 12px; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: #b8943f; font-size: 14px;"><a href="mailto:${email}" style="color: #b8943f; text-decoration: none;">${email}</a></td>
          </tr>
          ${organization ? `
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.4); font-size: 12px; vertical-align: top;">Organization</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.8); font-size: 14px;">${organization}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.4); font-size: 12px; vertical-align: top;">Partner Type</td>
            <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.8); font-size: 14px;">${partnerLabel}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 12px 0; color: rgba(255,255,255,0.4); font-size: 12px; vertical-align: top;">Message</td>
            <td style="padding: 12px 0; color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</td>
          </tr>` : ""}
        </table>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(184,148,63,0.2);">
          <p style="color: rgba(255,255,255,0.2); font-size: 10px; letter-spacing: 1px; margin: 0;">Submitted via injazatcapitals.com Partner With Us Form</p>
          <p style="color: rgba(255,255,255,0.15); font-size: 10px; margin: 5px 0 0 0;">${new Date().toUTCString()}</p>
        </div>
      </div>
    `;

    if (resend) {
      const { error } = await resend.emails.send({
        from: SENDER_EMAIL,
        to: [RECIPIENT_EMAIL],
        replyTo: email,
        subject: `Partnership Inquiry — ${partnerLabel} — ${name}${organization ? ` (${organization})` : ""}`,
        html: emailHtml,
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json(
          { error: "Failed to send inquiry. Please try again." },
          { status: 500 }
        );
      }
    } else {
      console.log("=== PARTNERSHIP INQUIRY ===");
      console.log("To:", RECIPIENT_EMAIL);
      console.log("From:", email);
      console.log("Name:", name);
      console.log("Organization:", organization);
      console.log("Type:", partnerLabel);
      console.log("Message:", message);
      console.log("==========================");
    }

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
