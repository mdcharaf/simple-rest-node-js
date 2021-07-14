import { Router } from 'express';
import { dashboardRepo } from '../../db'
import makeDashboardController from './dashboardController'

const dashboardController = makeDashboardController({ dashboardRepo });

const router = Router();
router.get('/', dashboardController.list);
router.post('/', dashboardController.add);
router.delete('/', dashboardController.remove);

export const dashboardRouter  = router;