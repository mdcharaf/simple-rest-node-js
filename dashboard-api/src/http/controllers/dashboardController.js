import { makeResponse } from '../httpTransactions';

export default function dashboardController({ dashboardRepo }) {
  return Object.freeze({
    list,
    add
  });

  async function list(httpRequest) {
    return makeResponse({
      statusCode: 200,
      body: {
        message: 'list method'
      }
    });
  }

  async function add(httpRequest) {
    await dashboardRepo.insert(httpRequest.body);
    return makeResponse({
      statusCode: 200,
      body: {
        message: 'add method'
      }
    });
  }

}