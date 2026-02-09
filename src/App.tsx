// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import MyWorks from './pages/MyWorks/MyWork.tsx'

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home />
          } />
        </Routes>
        
        <Routes>
          <Route path="/MyWorks" element={
            <MyWorks />
          } />
        </Routes>
      </BrowserRouter>
    </main>
  )
}