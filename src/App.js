import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TODO from './todo'
import CalculatorApp from './calculator'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TODO />}></Route>
      <Route path="/calculator" element={<CalculatorApp />}></Route>
    </Routes >
  )
}
