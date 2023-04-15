import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HanSolo from './components/HanSolo'

function App() {

  return (
    <div className="App">
      <Navbar />
      <HanSolo />
    </div>
  )
}

export default App
