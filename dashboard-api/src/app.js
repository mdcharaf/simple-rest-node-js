import express from 'express';
import { config } from './config';
import { appRouter } from './http/routes/appRouter';

(async () => {
  const app = express();
  const port = config.port || 8080;

  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));
  app.use('/api/v0/', appRouter);

  app.get('/', async (_, res) => {
    res.send('Use /api/v0 endpoint.');
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})();
