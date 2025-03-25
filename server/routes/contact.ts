import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { sendContactEmail } from '../utils/email';

const router = express.Router();

// Validation middleware
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').optional().matches(/^[0-9+\-\s()]+$/).withMessage('Invalid phone number'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

// Contact form submission endpoint
router.post('/', validateContact, async (req: Request, res: Response) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, subject, message } = req.body;

    // Send email
    await sendContactEmail({
      name,
      email,
      phone,
      subject,
      message,
    });

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'There was an error submitting your message. Please try again later.',
    });
  }
});

export default router; 