const sendEmail = require('../utils/sendEmail');
const createStyledEmailMessage = require('../utils/createStyledEmailMessage');

exports.sendEmail = async (req, res) => {
  const { name, email, message, contactNo } = req.body;

  const subject = 'Contact Form Submission';
  const emailMessage = createStyledEmailMessage(subject, `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Contact No: ${contactNo}</p>
    <p>Message: ${message}</p>
  `);

  try {
    await sendEmail(process.env.EMAIL_USER, subject, emailMessage);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
