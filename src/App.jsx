import React from 'react'
import { Route, Routes } from 'react-router'
import SignIn from './pages/register/SignIn'
import InstaCardProps from './components/Props/InstaCardProps'
import Home from './pages/Home'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App