import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactValidationSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefixed with /api
  
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
