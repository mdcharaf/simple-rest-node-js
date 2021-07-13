import express from 'express';
import dotenv from 'dotenv';
import { appRouter } from './controllers/v0/AppRouter.js';

(async () => {
  dotenv.config();

  const app = express();
  const port = process.env.PORT || 8080;

  app.use('/api/v0/', appRouter);

  app.get('/', async (_, res) => {
    res.send('Use /api/v0 endpoint.');
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();
