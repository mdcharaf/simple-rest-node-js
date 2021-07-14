import { created, badRequest, ok } from '../httpUtils'

export default function makeChartController ({ dashboardService, makeChart }) {
  return Object.freeze({
    add,
    remove
  })

  async function add (httpRequest) {
    try {
      const chart = makeChart(httpRequest.body)
      await dashboardService.addChart(chart)

      return created({
        body: {
          id: chart.id,
          title: chart.title,
          range: chart.range,
          interval: chart.interval
        }
      })
    } catch (error) {
      return badRequest({ error: error.message })
    }
  }

  async function remove (httpRequest) {
    try {
      const chartId = httpRequest.params.id
      const { dashboardId } = httpRequest.body
      const result = await dashboardService.removeChart(dashboardId, chartId)

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
