/*import nodemailer from "nodemailer";
import {MailT} from "@/types/contact";

export async function sendMail(
  {
     email,
     name,
     subject,
     message,
   }: MailT
) {

  const { GMAIL, GOOGLE_APP_PW } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL,
      pass: GOOGLE_APP_PW,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: GMAIL,
      to: GMAIL,
      subject: subject,
      text: message
      //html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}



export function compileWelcomeTemplate(name: string, url: string) {
  const template = handlebars.compile(welcomeTemplate);
  const htmlBody = template({
    name: name,
    url: url,
  });
  return htmlBody;
}

 */