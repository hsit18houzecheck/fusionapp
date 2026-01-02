import nodemailer from "nodemailer";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

export const getEmailTransporter = () => {
  const sesClient = new SESv2Client({
    region: process.env.NEXT_AWS_REGION,
    credentials: {
      accessKeyId: process.env.NEXT_AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.NEXT_AWS_SECRET_ACCESS_KEY || "",
    },
  });

  return nodemailer.createTransport({
    SES: { sesClient, SendEmailCommand },
  });
};
