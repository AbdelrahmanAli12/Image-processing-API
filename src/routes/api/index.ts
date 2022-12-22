import express from 'express';
import sharp from 'sharp';
const api = express.Router();

api.get('/test', (req, res) => {
  res.json('The api route is connected');
});

api.get('/images', async (req, res) => {
  const filename = req.query.filename;
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
  } else {
    try {
      await sharp(`assets/full/${filename}.jpg`)
        .resize(width, height, {
          fit: 'contain',
        })
        .toFile(`assets/thumb/${filename}_thumb.jpg`);
    } catch (error) {
      res.status(404).json('Photo not found');
    }

    res.sendFile(`thumb/${filename}_thumb.jpg`, { root: './assets' });
  }
});

export default api;
