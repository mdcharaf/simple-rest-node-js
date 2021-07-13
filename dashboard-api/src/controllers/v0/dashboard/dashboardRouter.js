import { Router } from 'express';
import { dashboardRepo } from '../../../db';
import DashboardController from './dashboardController';

const dashboardController = new DashboardController(dashboardRepo);

const router = Router();
router.get('/', dashboardController.list);
router.post('/', dashboardController.add);
router.delete('/', dashboardController.delete);

export const dashboardRouter  = router;