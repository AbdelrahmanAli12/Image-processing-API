import express from 'express';
import fs from 'fs';
import image from '../utility/sharp';

const api = express.Router();

api.get('/test', (req, res) => {
  res.json('The api route is connected');
});

api.get('/images', async (req, res): Promise<void> => {
  const filename = String(req.query.filename);
  const width = Number(req.query.width);
  const height = Number(req.query.height);
  if (filename == null || width == null || height == null) {
    res.status(400).json({ message: 'inputs required' });
  } else if (width <= 0 || height <= 0) {
    res
      .status(400)
      .json({ message: 'width and height must be greater than 0' });
  } else if (isNaN(width) || isNaN(height)) {
    res.status(400).json({ message: 'width and height must be a number' });
  } else if (
    fs.existsSync(`./assets/thumb/${filename}-${width}-${height}_thumb.jpg`)
  ) {
    res.sendFile(`thumb/${filename}-${width}-${height}_thumb.jpg`, {
      root: './assets',
    });
  } else {
    try {
      await image(filename, width, height);
    } catch (error) {
      res.status(404).json('Photo not found');
    }

    res.sendFile(`thumb/${filename}-${width}-${height}_thumb.jpg`, {
      root: './assets',
    });
  }
});

export default api;
