import { Router } from 'express';
import { chartController } from '../controllers';
import { redirectToControllerAction } from '../middlewares/actionMiddleware'

const router = Router();
router.post('/', redirectToControllerAction(chartController.add));
// router.delete('/:id', redirectToControllerAction(dashboardController.remove));

export const chartRouter = router;