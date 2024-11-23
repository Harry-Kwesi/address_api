require("dotenv").config();

// Debug log to check if the environment variables are loaded correctly
console.log("EMAIL:", process.env.EMAIL);
console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD);
const Submission = require("../models/submissionModel");
const nodemailer = require("nodemailer");

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for port 587
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Connection Error:", error);
  } else {
    console.log("SMTP Server is ready to take messages:", success);
  }
});

// Controller: Handle form submission
exports.submitForm = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save to database
    const submission = new Submission({ name, email, subject, message });
    await submission.save();

    // Send email
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Form Submission: ${subject}`,
      text: `You received a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ message: "An error occurred while submitting the form." });
  }
};
