import React from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
import ListView from './components/ListView'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/list" element={<ListView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
