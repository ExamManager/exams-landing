import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: boolean;
  error?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const email =
    typeof req.body?.email === "string" ? req.body.email.trim() : "";

  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ success: false, error: "Invalid email" });
  }

  try {
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      return res.status(500).json({
        success: false,
        error: "RESEND_AUDIENCE_ID is not configured",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        error: "RESEND_API_KEY is not configured",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const response = await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId,
    });

    if (response.error) {
      throw new Error("Failed to send email");
    }

    res.status(200).json({ success: true });
  } catch {
    res.status(500).json({ success: false });
  }
}
