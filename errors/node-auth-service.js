// Intentional bug: request body is missing.
export function readUserEmail(req = {}) {
  return req.body.email.toLowerCase();
}
