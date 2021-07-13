import { Router } from 'express';
import { getDbClient } from '../../../db/dbClient';
import DashboardRepo from '../../../repos/dashboardRepo';
import DashboardController from './dashboardController';

const repo = new DashboardRepo(getDbClient);
const dashboardController = new DashboardController(repo);
const router = Router();

router.get('/', dashboardController.list);
router.post('/', dashboardController.add);
router.delete('/', dashboardController.delete);

export const DashboardRouter  = router;