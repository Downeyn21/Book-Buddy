import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route />
      </Routes>
    </>
  )
}

export default App
