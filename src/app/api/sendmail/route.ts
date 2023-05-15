import { ContactForm } from '@component/constants/contact-form';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body: ContactForm = await req.json();
  try {
    const res = await sendMail(body);
    if (res.success) {
      return NextResponse.json({
        msg: 'mail sended successfully',
        status: 200,
      });
    } else {
      return NextResponse.json({
        status: 404,
        msg: 'Problem with send mail function',
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 404,
      msg: 'send mail api is not working',
    });
  }
}

async function sendMail(mailData: any) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'shadisolution2023@gmail.com',
      pass: 'bbasbqbtcwwsevwy',
    },
    tls: { rejectUnauthorized: false },
  });

  const { data, subject, emailBody } = mailData;
  const mailOptions = {
    from: 'Shadi Solution <shadisolution2023@gmail.com>',
    to: data.email,
    subject: subject,
    html: emailBody,
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    return { success: true, data: response };
  } catch (error) {
    return { success: false, error };
  }
}
