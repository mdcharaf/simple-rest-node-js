import { created, badRequest, ok } from '../httpUtils'

export default function makeDashboardController ({ dashboardService, makeDashboard }) {
  return Object.freeze({
    list,
    add,
    remove
  })

  async function list (_httpRequest) {
    try {
      const result = await dashboardService.listDashboards()
      return ok({ body: result })
    } catch (error) {
      return badRequest({ error: error.message })
    }
  }

  async function add (httpRequest) {
    try {
      const dashboard = makeDashboard(httpRequest.body)
      const result = await dashboardService.addDashboard(dashboard)
      return created({
        body: {
          id: result.id,
          title: result.title,
          description: result.description,
          charts: result.charts
        }
      })
    } catch (error) {
      return badRequest({ error: error.message })
    }
  }

  async function remove (httpRequest) {
    try {
      const id = httpRequest.params.id
      const result = await dashboardService.removeDashboard(id)
      return ok({
        body: {
          deleteCount: result
        }
      })
    } catch (error) {
      return badRequest({ error: error.message })
    }
  }
}
