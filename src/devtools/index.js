import React from 'react'
import ReactDOM from 'react-dom'
import { ImmerDevTools } from 'immerx-devtools'
import cssText from 'immerx-devtools/dist/immer-devtools.esm.txt'

// import styles from './styles'
;(function installHook(window) {
  if (!window.__IMMER_DEVTOOLS_HOOK__) {
    const hook = {
      enabled: false,
      emit(payload) {
        window.postMessage({ source: '@@ImmerDevTools', payload }, '*')
      },
    }

    Object.defineProperty(window, '__IMMER_DEVTOOLS_HOOK__', {
      get() {
        return hook
      },
    })
  }
})(window)

const state$ = {
  listener: null,
  buffer: [],
  subscribe(listener) {
    this.listener = listener

    for (const entry of this.buffer) {
      listener.next(...entry)
    }

    return {
      unsubscribe: () => {
        this.listener = null
        this.buffer.length = 0
      },
    }
  },
  reset() {
    this.listener.reset()
  },
  next(...args) {
    if (this.listener) {
      this.listener.next(...args)
      this.buffer.length = 0
    } else {
      this.buffer.push(args)
    }
  },
}

window.addEventListener('message', event => {
  if (
    event.source === window &&
    event.data.source &&
    event.data.source == '@@ImmerDevTools'
  ) {
    state$.next(...event.data.payload)
  }
})

const iframe = document.createElement('iframe')
iframe.setAttribute('style', 'position:absolute;bottom:0;left:0;z-index:999999')
iframe.setAttribute('width', '100%')
iframe.setAttribute('height', '50%')
document.body.appendChild(iframe)
iframe.contentDocument.head.innerHTML = `
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>${cssText.replace(/^(export\s+default\s")|(\\n)|(";)$/g, '')}</style>
<title>ImmerDevTools</title>
`
iframe.contentDocument.body.innerHTML = `
<div id="devtools-root"></div>
`

ReactDOM.render(
  <ImmerDevTools state$={state$} />,
  iframe.contentDocument.getElementById('devtools-root'),
)
