import { useState, useEffect } from 'react'

function getHash(w) {
  return w.location.hash.replace(/^#\//, '')
}

const hash$ = {
  listeners: new Set(),
  value: getHash(window),
  subscribe(listener) {
    this.listeners.add(listener)

    return { unsubscribe: () => this.listeners.delete(listener) }
  },
  next(hash) {
    for (const listener of this.listeners) listener(hash)
    this.value = hash
  },
}

window.addEventListener('hashchange', onHashChange)
function onHashChange(e) {
  hash$.next(getHash(e.target))
}

export function useHash() {
  const [hash, setHash] = useState(getHash(window))

  useEffect(() => {
    const sub = hash$.subscribe(setHash)
    return () => sub.unsubscribe()
  }, [])

  return hash
}
