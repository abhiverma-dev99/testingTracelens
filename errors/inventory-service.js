// Intentional bug: warehouse webhook sent invalid JSON.
export function parseWarehousePayload(raw) {
  return JSON.parse(raw);
}
