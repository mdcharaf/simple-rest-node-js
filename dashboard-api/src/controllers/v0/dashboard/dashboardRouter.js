import { Router } from 'express';
import DashboardController from './dashboardController.js';

const router = Router();
const dashboardController = new DashboardController();

router.get('/', dashboardController.list);
router.post('/', dashboardController.add);
router.delete('/', dashboardController.delete);

export const DashboardRouter  = router;