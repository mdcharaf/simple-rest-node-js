export function makeRequest({ body, query, params, method, path, headers }) {
  return Object.freeze({
    body,
    query,
    params,
    method,
    path,
    headers
  });
}

export function makeResponse({ headers, statusCode, body }) {
  return Object.freeze({
    headers,
    statusCode, 
    body
  });
}