import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayerTable from './components/PlayerTable'
import { Route, Routes, useNavigate} from "react-router-dom"
import Home from "./pages/Home"
import Game from "./pages/Game"

function App() {
  const navigate = useNavigate()

  return (
    <>
      {/*<ul>
         <li>
          <button onClick={() => navigate("/")}>Home </button>
        </li>
       <li>
        <button onClick={() => navigate("/Toto")}>Toto </button>
        </li>
      </ul>*/}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Game" element={<Game />}/>
      </Routes>

      {/*<button onClick={() => navigate("/Game")}>Jouer </button>*/}
    </>
  )
}

export default App
