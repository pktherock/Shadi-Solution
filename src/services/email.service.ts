import { ContactForm } from '@component/constants/contact-form';

const sendMailToCustomer = async (data: ContactForm) => {
  const emailBody = getEmailBodyForCustomer(data);
  const mailData = {
    emailBody,
    subject: 'Request Received!',
    data: { email: data.email },
  };
  try {
    const res = await fetch('/api/sendmail', {
      method: 'POST',
      body: JSON.stringify(mailData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err); // !❌
  }
};

const sendMailToUs = async (data: ContactForm) => {
  const emailBody = getEmailBodyForUs(data);
  const mailData = {
    emailBody,
    subject: 'Got New Request!',
    data: { ...data, email: 'shadisolution2023@gmail.com' },
  };
  try {
    const res = await fetch('/api/sendmail', {
      method: 'POST',
      body: JSON.stringify(mailData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err); // !❌
  }
};

const getEmailBodyForCustomer = (formData: ContactForm) => {
  return `
  <div>
    <h2>Hello <strong>${formData.name}</strong>,</h2>
    <p>We have received you request.</p>
    <p>We will call back you soon.</p>
    <p>If you have any queries please feel free to reach out to us for more
      info...</p>
    <p>Contact Person Name : <strong>Vicky Kumar</strong></p>
    <p>Contact No : <strong>8709856307</strong></p>
    <br />

    <p>
      Regards,<br />
      Prashant Kumar
      <br />
      Shadi solution Tech support
    </p>
  </div>`;
};

const getEmailBodyForUs = (formData: ContactForm) => {
  return `
  <div>
    <h2>Hello <strong>Vicky</strong>,</h2>
    <p>We got one new request, please checkout below customer details.</p>
    <p>Name : <strong>${formData.name}</strong></p>
    <p>Mobile No. : <strong>${formData.mobileNo}</strong></p>
    <p>email: <strong>${formData.email}</strong></p>
    <p>Event Date : <strong>${formData.date.startDate} To ${formData.date.endDate}</strong></p>
    <p>Event Type : <strong>${formData.eventType}</strong></p>
    <p>message: <strong>${formData.message}</strong></p>
    <br />

    <p>
      Regards,<br />
      Prashant Kumar
      <br />
      Shadi solution Tech support
    </p>
  </div>`;
};

export { sendMailToCustomer, sendMailToUs };
