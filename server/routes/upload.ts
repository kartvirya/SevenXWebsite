import express from 'express';
import { upload } from '../config/upload';
import path from 'path';

const router = express.Router();

// Handle single image upload
router.post('/image', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Return the file path that can be used to access the image
    const filePath = `/uploads/${req.file.filename}`;
    res.json({
      success: true,
      filePath,
      message: 'File uploaded successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error uploading file',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Serve uploaded files
router.get('/:filename', (req, res) => {
  const { filename } = req.params;
  res.sendFile(path.join(__dirname, '../uploads', filename));
});

export default router; 