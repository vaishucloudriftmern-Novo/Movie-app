import React,{createContext,useState} from "react"
import Watchlist from "../pages/Watchlist"

export const WatchListContext=createContext()

export const WatchListProvider=({children})=>
    {
    const [watchlist,setWatchList]=useState([])

    const toggleWatchlist=(movie)=>{
        const  index=watchlist.findIndex((m)=> m.id === movie.id)
        if(index === -1){
            setWatchList([...watchlist,movie])
        }else
            {
               setWatchList([...watchlist.slice(0,index),...watchlist.slice(index+1)])
            }
        }
    
    return(
        <WatchListContext.Provider value={{Watchlist,toggleWatchlist}}>
    {children}
        </WatchListContext.Provider>
    )
    
    }
