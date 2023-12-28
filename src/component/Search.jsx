import { useEffect, useState } from "react";
import '../styles/search.css'
import { useFetcher } from "react-router-dom";
import Movielist from "./Movielist";

const Search = () => {
    let[searchword , setSearchword] = useState("");
    let[movies , setMovies] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{
            setMovies(data)
        })
    } , [])

    return ( <div className="search-comp">
                <input type="text" placeholder="Search Movies" value={searchword} 
                        onChange={(e)=>{setSearchword(e.target.value)}}/>

                {movies && searchword=="" && <Movielist movies={movies} title="Popular search"/>}

                {movies && searchword!="" && 
                <Movielist 
                movies={movies.filter((m)=>{return m.moviename.toUpperCase().includes(searchword.toUpperCase())})} 
                title="Search result"/>}                
            </div> );
}
 
export default Search;