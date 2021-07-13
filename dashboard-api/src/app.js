import express from 'express';
import dotenv from 'dotenv';

(async () => {
  dotenv.config();

  const app = express();
  const port = process.env.PORT || 8080;

  app.get('/', async (req, res) => {
    res.send('Welcome to Dashboard API');
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();