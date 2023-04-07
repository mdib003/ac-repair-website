
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "ibrahimdev03@gmail.com", // Your email where you'll receive emails
      from: "support@homecomfortindia.in", // your website email address here
      subject: `${'Bismillah'}`,
      text: 'Bismillah',
      html: `<div>Allah Hu Akbar</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "", message:'success' });
}

 
/* export default function handler(req, res) {
    console.log(req.body)
    res.status(200).json({message: 'success'})
}  */