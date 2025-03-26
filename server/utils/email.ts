import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Sends an email with contact form data
 */
export async function sendContactEmail(data: ContactFormData): Promise<void> {
  try {
    // Create a transporter using environment variables or defaults
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASS || '',
      },
    });

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@sevenx.com',
      to: process.env.EMAIL_TO || 'contact@sevenx.com',
      subject: `Contact Form: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        <p><strong>Subject:</strong> ${data.subject}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully');
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw new Error('Failed to send email');
  }
} 