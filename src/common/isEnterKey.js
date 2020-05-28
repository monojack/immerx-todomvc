export function isEnterKey({ key, keyCode, which }) {
  return key === 'Enter' || keyCode === 13 || which === 13
}
