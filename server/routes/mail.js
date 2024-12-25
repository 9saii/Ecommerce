// mail.js (ES Module version)

import nodemailer from 'nodemailer';

// Create a transporter
export const transportmail = async (req, res) => {
  const { email, message, name, phone } = req.body;
  
  if (!email || !message || !name || !phone) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      required: ['email', 'message', 'name', 'phone']
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone number format' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || 'recipient@example.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
            Contact Form Details:

            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
            Sent at: ${new Date().toLocaleString()}
                  `,
                  html: `
            <h2>Contact Form Details:</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Message:</h3>
            <p>${message}</p>
            <p><em>Sent at: ${new Date().toLocaleString()}</em></p>
          `
      };
              
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ 
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Mail error:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
    });
  }
};
