import { Router } from 'express';

const router = Router();

router.get('/', async (_, res) => {
  res.send('Dashboard Items');
});

export const DashboardRouter  = router;