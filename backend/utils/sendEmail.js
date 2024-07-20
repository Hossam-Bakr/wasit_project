const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, message, attachment) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // True for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `Wasit Project <${process.env.EMAIL_USER}>`,
    to, // Recipient email address
    subject,
    html: message,
    attachments: attachment ? [attachment] : [], // Include attachment if provided
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Failed to send email:", error);
  }
};

module.exports = sendEmail;
