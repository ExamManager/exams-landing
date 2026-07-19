import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  success: boolean;
  error?: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  return res.status(503).json({
    success: false,
    error: "Portfolio demo — signup is unavailable",
  });
}
