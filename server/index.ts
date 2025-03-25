import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import dotenv from "dotenv";
import cors from 'cors';
import contactRoutes from './routes/contact';

// Load environment variables from .env files
dotenv.config({ path: '.env.local' });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware
app.use(cors());

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Routes
  app.use('/api/contact', contactRoutes);

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client
  const port = process.env.PORT || 5001;
  try {
    server.listen(port, () => {
      log(`serving on port ${port}`);
    });
  } catch (error: any) {
    if (error.code === 'EADDRINUSE') {
      log(`Port ${port} is already in use. Please try a different port or kill the process using this port.`);
      process.exit(1);
    }
    throw error;
  }
})();
