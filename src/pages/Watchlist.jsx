import React from 'react'
import Genfilter from "../components/Genfilter"

const Watchlist = () => {
  return (
    <div className="p-4 pt-16">
      <input type="text" placeholder='Search Movies' className="p-2 w-3/ md:w-1/2 border rouded bg-gray-500 bg-opacity-60
               backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10"/>

      <div className="mt-16 flex justify-center"><Genfilter /></div>
    </div>
  )
}

export default Watchlist