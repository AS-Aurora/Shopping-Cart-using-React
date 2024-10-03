import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Productlist from './pages/Productlist'
import Productdetails from './pages/Productdetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/product-list' element={<Productlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product-details/:id' element={<Productdetails />} />
      {/* <Productlist /> */}
      </Routes>
    </>
  )
}

export default App
