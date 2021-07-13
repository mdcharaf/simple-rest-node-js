import { Router } from 'express';
import { getDbClient } from '../../../db/dbClient.js';
import DashboardRepo from '../../../repos/dashboardRepo.js';
import DashboardController from './dashboardController.js';

const repo = new DashboardRepo(getDbClient);
const dashboardController = new DashboardController(repo);

const router = Router();

router.get('/', dashboardController.list);
router.post('/', dashboardController.add);
router.delete('/', dashboardController.delete);

export const DashboardRouter  = router;