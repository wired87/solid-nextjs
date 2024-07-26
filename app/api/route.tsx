
import {NextResponse} from "next/server";
import {sendMail} from "@/lib/mail";

export async function POST(req: any) {
  console.log("raw", req)
  try {
    const formData = await req.json()
    console.log("server stuff", formData)
    const res = await sendMail(formData)

    console.log("res", res)

    return NextResponse.json(
      {
        result: res,
        ok: true
      }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { message: 'Something went wrong', ok: false },
      { status: 500 }
    )
  }
}
/*
 const result = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_GMAIL, // Assuming you have these set in your .env.local file
      to: [process.env.NEXT_PUBLIC_GMAIL],
      subject: formData.subject,
      react: EmailTemplate(formData),
    });
 */