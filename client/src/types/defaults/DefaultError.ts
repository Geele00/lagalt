export interface DefaultError extends Error {
  cause: { code: number };
}
