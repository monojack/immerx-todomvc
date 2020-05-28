export function isEscapeKey({ key, keyCode, which }) {
  return key === 'Escape' || keyCode === 27 || which === 27
}
