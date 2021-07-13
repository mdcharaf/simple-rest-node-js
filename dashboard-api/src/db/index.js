import DashboardRepo from './repos/dashboardRepo';
import { getDbClient } from './clients/mongoDbClient'

const dashboardRepo = new DashboardRepo(getDbClient);

export { dashboardRepo };