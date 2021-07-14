export default function makeDashboardService({ dashboardRepo }) {
  return Object.freeze({
    listDashboards,
    addDashboard
  })

  async function listDashboards() {
    return await dashboardRepo.list();
  }

  async function addDashboard(dashboard) {
    return await dashboardRepo.insert(dashboard);
  }
}