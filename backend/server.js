const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS.replace(/\s+/g, '')
  }
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('Error connecting to mail server:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// API Endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, company, industry, maturity, message } = req.body;

  // Email Content
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address (must be authenticated user)
    to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Receiver address
    replyTo: email, // Valid reply-to address
    subject: `Strategy Audit Request from ${company}`,
    text: `
      Name: ${name}
      Email: ${email}
      Company: ${company}
      Industry: ${industry}
      AI Maturity: ${maturity}
      
      Message:
      ${message}
    `,
    html: `
      <h3>New Strategy Audit Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Industry:</strong> ${industry}</p>
      <p><strong>AI Maturity:</strong> ${maturity}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.toString() });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Using Email: ${process.env.EMAIL_USER} (Length: ${process.env.EMAIL_USER.length})`);
  console.log(`Password length: ${process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'undefined'}`);
});
