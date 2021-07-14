import { Router } from 'express';
import { dashboardController } from '../controllers';
import { redirectToControllerAction } from '../middlewares/actionMiddleware'

const router = Router();
// router.get('/', redirectToControllerAction(dashboardController.list));
router.post('/', redirectToControllerAction(dashboardController.add));

export const dashboardRouter  = router;