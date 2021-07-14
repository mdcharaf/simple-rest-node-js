import { makeRequest } from '../httpTransactions'

export function redirectToControllerAction(controllerAction) {
  return async (req, res) => {
    const httpRequest = makeRequest({
      body: req.body,
      query: req.query,
      params: req.params,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type')
      }
    });

    try {
      const httpResponse = await controllerAction(httpRequest);

      if (httpResponse.headers) {
        res.set(httpResponse.headers);
      }
      res.type('json');
      res.status(httpResponse.statusCode).send(httpResponse.body);
    } catch (error) {
      res.status(500).send({ error: 'Application Crashed!' });
    }
  }
}