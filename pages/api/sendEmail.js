
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    try {
        await sendgrid.send({
            to: "ibrahimdev03@gmail.com", // Your email where you'll receive emails
            from: "support@homecomfortindia.in", // your website email address here
            subject: `${'Bismillah'}`,
            text: 'Bismillah',
            html: `<div>Allah Hu Akbar</div>`,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ error: true, message:'Message could not be delivered. Please try again.'});
    }

    return res.status(200).json({ error: false, message: 'Thank you! Your message has been delivered.' });
}
