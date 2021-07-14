import { dashboardService } from '../../services';
import { makeDashboard } from '../../models';
import makeDashboardController from './dashboardController';

const dashboardController = makeDashboardController({ dashboardService, makeDashboard });

export { dashboardController };