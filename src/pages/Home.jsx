import React, { useState, useEffect } from 'react'
import Moviecard from "../components/Moviecard"

const Home = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [search,setSearch]=useState("")
    useEffect(() => {
        let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=f8e7317a9d718ec8839bc47c32dd5c33&language=en-US&`
        if(search){
            url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=f8e7317a9d718ec8839bc47c32dd5c33&language=en-US&`
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))

    }, [page,search])

    return (
        <div className="p-4 pt-16">
            <input type="text" placeholder='Search Movies' className="p-2 w-3/ md:w-1/2 border rouded bg-gray-500 bg-opacity-60
               backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10" onChange={(e)=>setSearch(e.target.value)}/>
            <div className="movie-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
                {movies.map((movie, index) => {
                    return (
                        <Moviecard key={movie.id || index} movie={movie} />

                    )
                })}
            </div>
            <div className="pagination-container flex justify-between mt-5">
                <button
                    disabled={page === 1}
                    className="p-2 mt-5 bg-gray-600 border rounded-2xl z-10"
                    onClick={() => {
                         if (page > 1) setPage((prev) => prev - 1)
                    }}
                >PREV</button>
                <button
                    className="p-2 mt-5 bg-gray-600 border rounded-2xl z-10 "
                    onClick={() => {
                        setPage((prev) => prev + 1)
                    }}
                >NEXT</button>
            </div>
        </div>
    )
}

export default Home