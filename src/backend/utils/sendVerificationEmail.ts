import { resend } from "@/lib/resend";

import { apiResponseInterface } from "../interface/apiResponseInterface";
import OtpVerificationTemplate from "@/frontend/components/emailTemplates/OtpVerificationTemplate";

export async function sendVerificationEmail(
  email: string, 
  username: string = '', 
  verificationCode: string
): Promise<apiResponseInterface> {
  
  try {
    const res = await resend.emails.send({
      from: "AI Powered Mock Interviewer <aipoweredmockinterviwer@gmail.com>",
      to: "asse262003@gmail.com",
      subject: "AI Powered Mock Interviewer Verification Code",
      
      // @ts-ignore
      react: OtpVerificationTemplate({ verificationCode }),
    });
    
    console.log("resent email res...   ------------->", res)


    return {
      success: true,
      message: "Verification email sent successfully",
    };
    
  } catch (error: any) {
    console.error("Error sending verification email:", 
      error instanceof Error ? error.message : error
    );

    return {
      success: false,
      message: "Failed to send verification email. Please try again later.",
    };
  }
}
