import buildMakeDashboard from './dashboard'
import buildMakeChart from './chart'
import Id from '../utils/Id'

const makeDashboard = buildMakeDashboard({ Id })
const makeChart = buildMakeChart({ Id })

export { makeDashboard, makeChart }
