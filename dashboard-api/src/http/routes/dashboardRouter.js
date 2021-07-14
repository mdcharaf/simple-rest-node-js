import { Router } from 'express';
import { dashboardController } from '../controllers';
import { redirect } from '../middlewares'

const router = Router();
router.get('/', redirect(dashboardController.list));
router.post('/', redirect(dashboardController.add));

export const dashboardRouter  = router;