import { Router } from 'express';
import { dashboardRouter } from './dashboard/dashboardRouter';

const router = Router();

router.use('/dashboard', dashboardRouter);

router.get('/', async (req, res) => {
  res.send('V0');
});

export const appRouter = router;