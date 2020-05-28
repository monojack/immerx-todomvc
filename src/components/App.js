import React from 'react'
import 'todomvc-common/base.css'
import 'todomvc-app-css/index.css'

import { Header } from './Header'
import { TodoList } from './TodoList'
import { Footer } from './Footer'

export function App() {
  return (
    <>
      <section className="todoapp" key={'app-section'}>
        <Header />
        <TodoList />
      </section>
      <Footer />
    </>
  )
}
