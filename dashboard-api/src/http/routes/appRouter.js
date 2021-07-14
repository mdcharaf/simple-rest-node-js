import { Router } from 'express';
import { dashboardRouter } from './dashboardRouter';
import { chartRouter } from './chartRouter';

const router = Router();
router.use('/dashboard', dashboardRouter);
router.use('/chart', chartRouter);

router.get('/', async (req, res) => {
  res.send('V0');
});

export const appRouter = router;