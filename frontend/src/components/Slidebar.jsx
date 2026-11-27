import React from 'react'
import { Link } from 'react-router-dom'


const Slidebar = () => {
  return (
    <div className="w-56 min-h-full bg-slate-200 p-5  flex flex-col">

      <h2 className="text-lg font-bold mb-5">
        Menu
      </h2>

      <div className="space-y-3">

        <Link to="/" className="p-2 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer flex flex-col">
          Dashboard
        </Link>
        <Link to="/About" className="p-2 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer flex flex-col">
          About
        </Link>

        <Link to="/Students" className="p-2 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer flex flex-col">
          Students
        </Link>

        <Link to="/Settings" className="p-2 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer flex flex-col">
          Settings
        </Link>
        



      </div>
    </div>
  )
}

export default Slidebar