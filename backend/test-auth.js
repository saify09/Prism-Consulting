require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });
const nodemailer = require('nodemailer');

console.log('--- SMTP Authentication Test ---');
console.log(`User: ${process.env.EMAIL_USER}`);
console.log(`Pass Length: ${process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 'undefined'}`);

const cleanPass = process.env.EMAIL_PASS.replace(/\s+/g, '');
console.log(`Clean Pass Length: ${cleanPass.length}`);
console.log(`Masked Pass: ${cleanPass.substring(0, 2)}...${cleanPass.substring(cleanPass.length - 2)}`);

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: cleanPass
  }
});

transporter.verify(function (error, success) {
  if (error) {
    console.error('\n❌ Connection Failed:');
    console.error(error);
  } else {
    console.log('\n✅ Connection SUCCESS! Your credentials work.');
  }
});
