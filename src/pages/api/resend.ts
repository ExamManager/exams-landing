import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    success: boolean
}

type RequestData = {
    email: string
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const response = await resend.contacts.create({
            email: req.body.email,
            unsubscribed: false,
            audienceId: '07f8d422-b61d-463e-a04a-e708c5c525fb',
        });
        const succes2 = response.error
        if (succes2) {
            throw new Error('Failed to send email')
        }
        res.status(200).json({ success: true })
        console.log('success')
    } catch (error) {
        res.status(500).json({ success: false })
        console.log('error')
    }
}