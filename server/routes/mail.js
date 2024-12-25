// mail.js (ES Module version)

import nodemailer from 'nodemailer';

// Create a transporter
export const transportmail = async (req, res) => {
  // Extract data from the request body
  const { email, message, name, phone } = req.body;
  
  // Check if required fields are provided
  if (!email || !message || !name || !phone) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Email user from environment
        pass: process.env.EMAIL_PASS,  // Email password from environment
      },
    });

    // Set up the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recipient@example.com',  // Replace with recipient email address
      subject: `New message from ${name} (${email})`,  // Dynamic subject based on form input
      text: `
        You have a new contact form submission:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      return res.status(200).json({ message: 'Email sent: ' + info.response });
    });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong while sending the email.' });
  }
};
