import { getEmailTemplate } from "@/lib/emailTemplate";
import { NextResponse } from "next/server";
import { getEmailTransporter } from "@/lib/emailTransporter";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { queryType, subject, firstName, lastName, email, phone, message } =
      body;

    if (!queryType || !email || !firstName || !lastName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    if (!process.env.NEXT_AWS_REGION || !process.env.NEXT_AWS_ACCESS_KEY_ID || !process.env.NEXT_AWS_SECRET_ACCESS_KEY) {
      console.error("Missing AWS SES configuration in environment variables");
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.FROM_EMAIL || "customer@houzecheck.com",
      to: email,
      subject: subject,
      html: getEmailTemplate({
        queryType,
        fname: firstName || "",
        lname: lastName || "",
        email: email || "",
        phone: phone || "",
        message: message || "",
      }),
    };
    
    const transporter = getEmailTransporter();
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
