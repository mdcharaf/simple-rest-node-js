import makeDashboardRepo from './repos/dashboardRepo';
import { getDbClient } from './clients/mongoDbClient'

const dashboardRepo = makeDashboardRepo({ getDbClient });

export { dashboardRepo };