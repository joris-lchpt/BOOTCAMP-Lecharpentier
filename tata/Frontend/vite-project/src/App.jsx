import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayerTable from './components/PlayerTable'
import { Route, Routes, useNavigate} from "react-router-dom"
import Home from "./pages/Home"
import Toto from "./pages/Toto"

function App() {
  const navigate = useNavigate()

  return (
    <>
      <ul>
        <li>
          <button onClick={() => navigate("/")}>Home </button>
        </li>
        <li>
        <button onClick={() => navigate("/Toto")}>Toto </button>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/toto" element={<Toto />}/>
      </Routes>
    </>
  )
}

export default App
