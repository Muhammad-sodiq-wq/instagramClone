import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />

      </Route>
    </Routes>
  )
}

export default App
