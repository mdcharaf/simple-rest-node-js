import { response } from '../httpUtils';

export default function dashboardController({ dashboardService, makeDashboard }) {
  return Object.freeze({
    list,
    add,
    remove,
  });

  // eslint-disable-next-line no-unused-vars
  async function list(_httpRequest) {
    try {
      const result = await dashboardService.listDashboards();

      return response({
        statusCode: 200,
        body: result
      });

    } catch (error) {
      return response({
        statusCode: 400,
        body: { error: error.message }
      });
    }
  }

  async function add(httpRequest) {
    try {
      const dashboard = makeDashboard(httpRequest.body);
      const result = await dashboardService.addDashboard(dashboard);

      return response({
        statusCode: 200,
        body: {
          id: result.id,
          title: result.title,
          description: result.description,
          charts: result.charts
        }
      });
    } catch (error) {
      return response({
        statusCode: 400,
        body: {
          error: error.message
        }
      });
    }
  }

  async function remove(httpRequest) {
    try {
      const id = httpRequest.params.id;
      const result = await dashboardService.removeDashboard(id);

      return response({
        statusCode: 200,
        body: {
          result
        }
      });
    } catch (error) {
      return response({
        statusCode: 400,
        body: {
          error: error.message
        }
      });
    }
  }
}