export function request({ body, query, params, method, path, headers }) {
  return Object.freeze({
    body,
    query,
    params,
    method,
    path,
    headers
  });
}

export function response({ headers, statusCode, body }) {
  return Object.freeze({
    headers,
    statusCode, 
    body
  });
}