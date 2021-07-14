export default function makeDashboardService({ dashboardRepo }) {
  return Object.freeze({
    addDashboard
  })

  async function addDashboard(dashboard) {
    const result = await dashboardRepo.insert(dashboard);
    return result;
  }
}