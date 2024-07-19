import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TODO from './todo'
import CalculatorApp from './calculator'
import QuizApp from './quiz'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TODO />}></Route>
      <Route path="/calculator" element={<CalculatorApp />}></Route>
      <Route path="/quiz-app" element={<QuizApp />}></Route>
    </Routes >
  )
}
