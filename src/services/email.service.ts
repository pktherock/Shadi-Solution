const sendMail = async () => {
  const response = await fetch('/api/sendmail', {
    method: 'POST',
    body: JSON.stringify({ hello: 'world' }),
  });
  return await response.json();
};

export { sendMail };
