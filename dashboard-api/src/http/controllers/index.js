import { dashboardService } from '../../services';
import { makeDashboard } from '../../models';
import makeDashboardController from './dashboardController';
import makeChartController from './chartController'

const dashboardController = makeDashboardController({ dashboardService, makeDashboard });
const chartController = makeChartController({ dashboardService });

export { dashboardController, chartController };