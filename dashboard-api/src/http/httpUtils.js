export function request ({ body, query, params, method, path, headers }) {
  return Object.freeze({
    body,
    query,
    params,
    method,
    path,
    headers
  })
}

export function response ({ headers, statusCode, body }) {
  return Object.freeze({
    headers,
    statusCode,
    body
  })
}

export function ok ({ headers, body }) {
  return response({ headers, body, statusCode: 200 })
}

export function created ({ headers, body }) {
  return response({ headers, body, statusCode: 201 })
}

export function badRequest ({ headers, error }) {
  return response({ headers, body: { error }, statusCode: 400 })
}
