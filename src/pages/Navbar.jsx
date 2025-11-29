import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
   <nav className="bg-gray-800 p-4 top-0 left-0 text-white w-full flex items-center justify-between fixed z-10">
    <Link to ="/" className="text-xl p-0 m-0">Movie App</Link>
    <Link to="/Watchlist" className="p-0 m-0">WatchList(0)</Link>
   </nav>
  )
}

export default Navbar