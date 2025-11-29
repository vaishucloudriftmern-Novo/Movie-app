import React, { useContext } from 'react'
import {FaHeart,FaRegHeart} from "react-icons/fa"
import { WatchListContext } from '../context/WatchListContext'

const defaultmovie={
poster_path:'https://www.themoviedb.org/movie/950396-the-gorge',
 title:"The Gorge",
 release_date:"2025-02-13",
}

const Moviecard = ({movie}) => {

  const {toggleWatchList,Watchlist}=useContext(WatchListContext)||{}

   const inWatchList = Array.isArray(Watchlist)
    ? Watchlist.some(item => item.id === movie?.id)
    : false

  const m = movie || defaultmovie 
   if (!m) return null  
  return (
    <div className="bg-gray-800 rounded-lg shadow-mg text-white relative"> 
      <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}
  alt={movie?.title} className=""/>
      <h3 className=" text-lg font-bold mt-4">{movie?.title}</h3>
      <p className="text-sm text-gray-400">{movie?.release_date}</p>
      {movie &&(
      <button className="absolute top-2 right-2 text-red-500 text-xl" onClick={()=> toggleWatchList(movie)}>{inWatchList ? <FaHeart/>:<FaRegHeart/>}</button>
      )}
    </div>
  )
}

export default Moviecard