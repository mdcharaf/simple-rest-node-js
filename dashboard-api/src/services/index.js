import { dashboardRepo } from '../db/repos'
import { makeDashboard } from '../models'
import makeDashboardService from './dashboardService'

const dashboardService = makeDashboardService({ dashboardRepo, makeDashboard })

export { dashboardService }
