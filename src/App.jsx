import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'
import { useEffect, useState } from 'react'
import Account from './components/Account'

function App() {
  const [user, setUser] = useState()
  const [token, setToken] = useState()

  // useEffect(() => {
  //   localStorage.setItem("token", token)
  // },[token])


  const nathan = {
    email: "purelogic66@gmail.com",
    firstname: "Nathan",
    id: 16737,
    lastname: "Downey",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTY3MzcsImVtYWlsIjoicHVyZWxvZ2ljNjZAZ21haWwuY29tIiwiaWF0IjoxNzQzMTA2NDE5LCJleHAiOjE3NDM3MTEyMTl9.zX2lWqE3K3hHxwviBkcfjuwENDPdoHxCzFrJ-qEEWk4",
    password: "goodjob"
  }


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login setToken={setToken} token={token} />}/>
        <Route path='/Register' element={<Register />} />
        <Route path='/Account' element={<Account setUser={setUser} user={user} token={token}/>} />
      </Routes>
    </>
  )
}

export default App
