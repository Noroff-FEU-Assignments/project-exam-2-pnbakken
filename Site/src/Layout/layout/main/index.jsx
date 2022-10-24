import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../../Pages/home'

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>  
    </main>
  )
}

export default Main