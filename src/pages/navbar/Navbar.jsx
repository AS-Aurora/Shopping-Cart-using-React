import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <header className="sticky top-0 w-full flex justify-between items-center p-5 max-w-6xl mx-auto z-10">
      <h2 className="text-4xl select-none">Logo</h2>
      <nav className="flex space-x-4">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `relative text-black p-1 hover:underline ${isActive ? "underline" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative text-black p-1 hover:underline ${isActive ? "underline" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `relative text-black p-1 hover:underline ${isActive ? "underline" : ""}`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative text-black     p-1 hover:underline ${isActive ? "underline" : ""}`
          }
        >
          Contact
        </NavLink>
      </nav>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg bg-white text-black border-2 border-white focus:outline-none focus:border-[#000000] transition duration-500"
        />
        <button className="absolute right-2 top-2 text-gray-500 hover:text-black">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
    </div>
  )
}

export default Navbar
