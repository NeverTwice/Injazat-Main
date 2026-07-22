'use server';

import { db } from '@/db';
import { contactSubmissions, partnerInquiries } from '@/db/schema';

/**
 * Institutional Contact Protocol
 * Handles secure submission and database logging for services@injazatcapitals.com
 */
export async function submitContactForm(formData: FormData) {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const company = formData.get('company') as string;
  const inquiryType = formData.get('inquiryType') as string;

  try {
    // 1. Log to Secure Database
    await db.insert(contactSubmissions).values({
      firstName,
      lastName,
      email,
      company,
      inquiryType,
      message,
    });

    // 2. [Future Expansion] Trigger Email Notification via Resend/SendGrid
    // Note: To send a real email, you would add an API key for a service like Resend here.
    
    return { success: true, message: "Inquiry registered with the Office." };
  } catch (error) {
    console.error("Submission Error:", error);
    return { success: false, message: "Connection to protocol failed. Please contact services@injazatcapitals.com directly." };
  }
}

export async function submitPartnerProposal(formData: FormData) {
  const fullName = formData.get('fullName') as string;
  const email = formData.get('email') as string;
  const company = formData.get('company') as string;
  const partnershipType = formData.get('partnershipType') as string;
  const message = formData.get('message') as string;

  try {
    await db.insert(partnerInquiries).values({
      fullName,
      email,
      company,
      partnershipType,
      message,
    });

    return { success: true, message: "Proposal securely delivered to the Capital Strategy team." };
  } catch (error) {
    console.error("Partner Submission Error:", error);
    return { success: false, message: "Secure gateway timeout. Please retry." };
  }
}
