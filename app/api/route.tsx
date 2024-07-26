import {EmailTemplate} from "@/components/EmailTemplates/ToMe";
import {Resend} from "resend";
import {NextResponse} from "next/server";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;
    console.log("Helllovvvvvvvvvvvvvvvv")
    try {
      const result = await resend.emails.send({
        from: process.env.NEXT_PUBLIC_GMAIL, // Assuming you have these set in your .env.local file
        to: [process.env.NEXT_PUBLIC_GMAIL],
        subject: formData.subject,
        react: EmailTemplate(formData),
      });
      console.log("result", result)
      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({
        success: false,
        error: "Failed to send email"
      });
    }
  }
}
export async function POST(req: Request) {
  console.log("raw", req)
  try {
    const formData = await req.json()
    console.log("server stuff", formData)
    const result = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_GMAIL, // Assuming you have these set in your .env.local file
      to: [process.env.NEXT_PUBLIC_GMAIL],
      subject: formData.subject,
      react: EmailTemplate(formData),
    });
    console.log("result", result)

    return NextResponse.json({ result: event, ok: true })
  } catch (err) {
    console.error(err)

    return NextResponse.json(
      { message: 'Something went wrong', ok: false },
      { status: 500 }
    )
  }
}