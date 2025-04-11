import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactValidationSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { HfInference } from "@huggingface/inference";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefixed with /api
  
  // Initialize the Hugging Face inference client
  const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);
  
  // Chatbot endpoint with predefined responses
  app.post("/api/chatbot", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ 
          message: "Message is required and must be a string",
          success: false
        });
      }
      
      // Predefined responses based on keywords
      const lowerMessage = message.toLowerCase();
      let reply = '';
      
      // Check for specific keywords/phrases and provide appropriate responses
      if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
        reply = "We offer a wide range of digital marketing and IT services including SEO, PPC, Content Marketing, Web Development, Mobile App Development, Web Application Development, IT Consulting, Social Media Marketing, Email Marketing, and Analytics. Feel free to visit our Services page for more details or contact us for specific inquiries.";
      } 
      else if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('office')) {
        reply = "Our office is located in Dallu, Kathmandu, near SBI Bank. We'd be happy to meet with you in person to discuss your project requirements.";
      }
      else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('call') || lowerMessage.includes('email')) {
        reply = "You can reach us at +976-9764833730 or email us at info@7xcore.com. We're available Monday to Friday, 9AM to 6PM.";
      }
      else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote') || lowerMessage.includes('pricing')) {
        reply = "Our pricing depends on your specific needs and project requirements. Please contact us at +976-9764833730 or fill out our contact form, and we'll provide you with a customized quote.";
      }
      else if (lowerMessage.includes('seo') || lowerMessage.includes('search engine')) {
        reply = "Our SEO services include keyword research, on-page optimization, technical SEO, content strategy, link building, and performance tracking. We focus on sustainable, white-hat techniques to improve your organic rankings.";
      }
      else if (lowerMessage.includes('social media') || lowerMessage.includes('facebook') || lowerMessage.includes('instagram')) {
        reply = "Our social media marketing services include strategy development, content creation, community management, paid social campaigns, influencer partnerships, and analytics. We help businesses build meaningful connections with their audiences across all major platforms.";
      }
      else if (lowerMessage.includes('web') || lowerMessage.includes('website') || lowerMessage.includes('development')) {
        reply = "We develop responsive, user-friendly websites optimized for conversions. Our web development services include custom site design, e-commerce solutions, landing pages, CMS implementation, performance optimization, and maintenance.";
      }
      else if (lowerMessage.includes('app') || lowerMessage.includes('mobile')) {
        reply = "Our mobile app development team creates native and cross-platform applications for iOS and Android. We focus on intuitive UI/UX design, performance, scalability, and ongoing support to ensure your app meets business objectives.";
      }
      else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        reply = "Hello! Welcome to 7xCore. How can we help you with your digital marketing or IT needs today?";
      }
      else {
        reply = "Thank you for your message. We'd be happy to discuss your specific needs in more detail. Please contact us at +976-9764833730 or visit our Contact page to schedule a consultation with our team.";
      }
      
      res.json({
        reply: reply,
        success: true
      });
    } catch (error) {
      console.error("Error processing chatbot request:", error);
      res.status(500).json({
        message: "Failed to generate response. Please try again later.",
        success: false
      });
    }
  });
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the incoming request data
      const validatedData = contactValidationSchema.parse(req.body);
      
      // Store the contact submission
      await storage.createContactSubmission(validatedData);
      
      // Return success response
      res.status(201).json({ 
        message: "Thank you for your message. We'll get back to you shortly.",
        success: true
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error",
          errors: validationError.details,
          success: false
        });
        return;
      }
      
      // Handle other errors
      console.error("Error processing contact form submission:", error);
      res.status(500).json({ 
        message: "Something went wrong. Please try again later.",
        success: false
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
