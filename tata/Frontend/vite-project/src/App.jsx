
import './App.css'
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
        <Route path="/Game/:id" element={<Game />}/>
      </Routes>

      {/*<button onClick={() => navigate("/Game")}>Jouer </button>*/}
    </>
  )
}

export default App
