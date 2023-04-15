
import sendgrid from "@sendgrid/mail";
import { env } from 'process';
import { NextRequest, NextResponse } from "next/server";

const apiKey: any = env.SENDGRID_API_KEY

sendgrid.setApiKey(apiKey);

export default async function handler(req: NextRequest, res: NextResponse) {
    try {
        await sendgrid.send({
            to: "ibrahimdev03@gmail.com", // Your email where you'll receive emails
            from: "support@homecomfortindia.in", // your website email address here
            subject: `${'Bismillah'}`,
            text: 'Bismillah',
            html: `<div>Allah Hu Akbar</div>`,
        });
    } catch (error) {
        return res.status(500).json({ error: true, message:'Message could not be delivered. Please try again.'});
    }

    return res.status(200).json({ error: false, message: 'Thank you! Your message has been delivered.' });
}