import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/Contact" element={<Contact />}>Contact</Route>
        <Route exact path="/About" element={<About />}>About</Route>
        <Route exact path="/Home" element={<Home />}>Home</Route>
      </Routes >
    </div>
  )
}

export default App
