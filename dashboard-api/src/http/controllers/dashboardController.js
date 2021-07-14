import { response } from '../httpTransactions';

export default function dashboardController({ dashboardService, makeDashboard }) {
  return Object.freeze({
    // list,
    add
  });

  // async function list(httpRequest) {
  //   return response({
  //     statusCode: 200,
  //     body: {
  //       message: 'list method'
  //     }
  //   });
  // }

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
        statusCode: 422,
        body: {
          error: error.message
        }
      });
    }
  }
}