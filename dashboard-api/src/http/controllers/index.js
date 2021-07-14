import { dashboardService } from '../../services';
import { makeDashboard, makeChart } from '../../models';
import makeDashboardController from './dashboardController';
import makeChartController from './chartController'

const dashboardController = makeDashboardController({ dashboardService, makeDashboard });
const chartController = makeChartController({ dashboardService, makeChart });

export { dashboardController, chartController };