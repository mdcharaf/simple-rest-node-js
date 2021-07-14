import { created, badRequest, ok } from '../httpUtils';

export default function makeChartController({ dashboardService }) {
  return Object.freeze({
    add,
    remove,
  });

  async function add(httpRequest) {
    try {
      const result = await dashboardService.addChart(httpRequest.body);
      return created({
        body: {
          id: result.id,
          title: result.title,
          description: result.description,
          charts: result.charts
        }
      });
    } catch (error) {
      return badRequest({ error: error.message })
    }
  }

  async function remove(httpRequest) {
    try {
      const id = httpRequest.params.id;
      const result = await dashboardService.removeDashboard(id);
      return ok({
        body: {
          deleteCount: result
        }
      });
    } catch (error) {
      return badRequest({ error: error.message })
    }
  }
}