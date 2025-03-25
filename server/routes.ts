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
  
  // Chatbot endpoint
  app.post("/api/chatbot", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ 
          message: "Message is required and must be a string",
          success: false
        });
      }
      
      // Prepare context about the company
      const companyContext = "You are an AI assistant for 7xSolution, a digital marketing agency founded in 2025. " +
        "We offer services including SEO, PPC, Content Marketing, Web Development, Mobile App Development, " +
        "Web Application Development, IT Consulting, Social Media Marketing, Email Marketing, and Analytics. " +
        "Keep responses brief and professional. Always guide users to contact us for specific inquiries.";
      
      // Call Hugging Face API with context + user message
      const input = `${companyContext}\n\nUser: ${message}\nAssistant:`;
      
      const result = await hf.textGeneration({
        model: "meta-llama/Llama-2-7b-chat-hf",
        inputs: input,
        parameters: {
          max_new_tokens: 250,
          temperature: 0.7,
          return_full_text: false
        }
      });
      
      res.json({
        reply: result.generated_text.trim(),
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
