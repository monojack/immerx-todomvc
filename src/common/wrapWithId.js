export function wrapWithID(id) {
  return ev => ({ event, id })
}
