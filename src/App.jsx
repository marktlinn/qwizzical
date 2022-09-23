import { useState, useEffect, useContext } from 'react'
import { Route , BrowserRouter as Router, Routes } from 'react-router-dom'
import { TokenContextProvider } from './context/TokenContext'
// pages and components
import Welcome from '../src/pages/Welcome'
import Quiz from './pages/Quiz'


function App() {
  //set global context from token

  return (
      <Router>
        <TokenContextProvider>
        <div>
          <Routes>
            <Route path="/" exact element={<Welcome />} />
            <Route path="/quiz" element={< Quiz/>} />
          </Routes>
        </div>
      </TokenContextProvider>
    </Router>
  )
}

export default App
