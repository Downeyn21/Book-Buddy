import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {


  return (
    <>
      {/* <Routes>
        <Route />
        <Route />
      </Routes> */}
      <NavBar />
      <Home />
    </>
  )
}

export default App
