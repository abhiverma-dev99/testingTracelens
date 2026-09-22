// Intentional bug: database is down.
export function connectPaymentsDb() {
  throw Object.assign(new Error("connect ECONNREFUSED 127.0.0.1:5432"), {
    code: "ECONNREFUSED",
  });
}
