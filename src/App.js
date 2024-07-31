import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CalculatorApp from './calculator'
import QuizApp from './quiz'
import TODO from './todo'
import CommentPage from './comment'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TODO />}></Route>
      <Route path="/calculator" element={<CalculatorApp />}></Route>
      <Route path="/quiz-app" element={<QuizApp />}></Route>
      <Route path="/comment-app" element={<CommentPage />}></Route>
    </Routes >
  )
}
