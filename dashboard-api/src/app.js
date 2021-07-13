import express from 'express';
import { config } from './config';
import { appRouter } from './controllers/v0/appRouter';

(async () => {
  console.log(config);
  const app = express();
  const port = config.port || 8080;

  app.use('/api/v0/', appRouter);

  app.get('/', async (_, res) => {
    res.send('Use /api/v0 endpoint.');
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();
