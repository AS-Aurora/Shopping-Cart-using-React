import React from 'react'
import Navbar from './pages/navbar/navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
