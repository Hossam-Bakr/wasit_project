const sendEmail = require('../utils/sendEmail');
const createStyledEmailMessage = require('../utils/createStyledEmailMessage');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

exports.sendEmail = async (req, res) => {
  const { name, email, message, contactNo } = req.body;

  const subject = 'Contact Form Submission';
  const emailMessage = createStyledEmailMessage(subject, `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Contact No: ${contactNo}</p>
    <p>Message: ${message}</p>
  `);

  let attachment = req.file ? { filename: req.file.filename, path: req.file.path } : null;

  try {
    await sendEmail(process.env.EMAIL_USER, subject, emailMessage, attachment);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.upload = upload;
