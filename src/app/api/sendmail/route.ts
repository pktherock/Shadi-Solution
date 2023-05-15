import nodemailer from 'nodemailer';
export async function POST(req: Request, res: Response) {
  const body = await req.json();
  console.log(body);
  try {
    const res = await sendMail();
    console.log(res);
    return new Response(
      JSON.stringify({ msg: 'mail sended successfully', status: 200 })
    );
  } catch (error) {
    console.log(error);
  }
}

async function sendMail() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'shadisolution2023@gmail.com',
      pass: 'bbasbqbtcwwsevwy',
    },
  });

  const mailOptions = {
    from: 'Shadi Solution <shadisolution2023@gmail.com>',
    to: 'pktherock00@gmail.com',
    subject: `Nodemailer working fine!`,
    html: `<h1>Welcome to Shadi solution</h1>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return error;
    } else {
      console.log(info);
      return info;
    }
  });
}
