import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Student Management System
      </h1>

      <div className="flex gap-5">

        <Link to="/login" className="p-2 rounded-md hover:bg-blue-500">
          Login
        </Link>


      </div>
    </nav>
  )
}

export default Navbar