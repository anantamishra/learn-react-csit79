import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TODO from './todo'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TODO />}></Route>
    </Routes>
  )
}
