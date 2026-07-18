import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
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
      email: req.body.email,
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
