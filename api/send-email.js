import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Handle CORS preflight
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, company, industry, maturity, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields: name, email, message' });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';
  const emailTo = process.env.EMAIL_TO || emailUser;

  if (!emailUser || !emailPass) {
    console.error('EMAIL_USER or EMAIL_PASS environment variable is not set.');
    return res.status(500).json({ message: 'Server email configuration is missing.' });
  }

  // Nodemailer Transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: `"${name}" <${emailUser}>`,
    to: emailTo,
    replyTo: email,
    subject: `Strategy Audit Request from ${company || 'Unknown Company'}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nIndustry: ${industry || 'N/A'}\nAI Maturity: ${maturity || 'N/A'}\n\nMessage:\n${message}`,
    html: `
      <h3>New Strategy Audit Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Industry:</strong> ${industry || 'N/A'}</p>
      <p><strong>AI Maturity:</strong> ${maturity || 'N/A'}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to', emailTo);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Nodemailer error:', error.message);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
