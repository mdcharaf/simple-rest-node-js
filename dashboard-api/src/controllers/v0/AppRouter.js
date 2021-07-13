import { Router } from 'express';
import { DashboardRouter } from './dashboard/dashboardRouter';

const router = Router();

router.use('/dashboard', DashboardRouter);

router.get('/', async (req, res) => {
  res.send('V0');
});

export const AppRouter = router;