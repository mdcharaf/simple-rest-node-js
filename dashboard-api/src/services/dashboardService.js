export default function makeDashboardService({ dashboardRepo }) {
  return Object.freeze({
    listDashboards,
    addDashboard,
    removeDashboard,
    addChart
  })

  async function listDashboards() {
    return await dashboardRepo.list();
  }

  async function addDashboard(dashboard) {
    return await dashboardRepo.insert(dashboard);
  }

  async function removeDashboard(id) {
    return await dashboardRepo.remove({ id });
  }

  async function addChart(chart) {
    return await dashboardRepo.insertChart(chart);
  }
}