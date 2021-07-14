import { dashboardRepo } from '../../db';
import makeDashboardController from './dashboardController'

const dashboardController = makeDashboardController({ dashboardRepo });

export { dashboardController };