// Intentional bug: token verify returned undefined.
export function readSessionUser(decodedToken) {
  const { userId, role } = decodedToken;
  return { userId, role };
}
