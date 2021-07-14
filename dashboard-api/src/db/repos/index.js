import makeDashboardRepo from './dashboardRepo';
import { getDbClient } from '../clients/mongoDbClient'

const dashboardRepo = makeDashboardRepo({ getDbClient });

export { dashboardRepo };