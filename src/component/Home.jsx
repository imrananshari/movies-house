import { useEffect, useState } from 'react';
import '../styles/home.css'
import Movielist from './Movielist';
import { Sliderify } from "react-sliderify";    


const Home = () => {

    let[movies , setMovies] = useState(null);
    let[sliderMovies , setsliderMovies] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then(res=>res.json())
        .then((data)=>{
            setMovies(data);
            setsliderMovies(data.slice(0,5))
        })
    } , [])


    return ( <div className="home-comp">

           {sliderMovies && 
           <Sliderify style={{width:"800px"}} slideDurationInSecs="3" showSpot={false} rounded={true}>
            {
                sliderMovies.map((m)=>{ return(
                    <div style={{height:"500px",background:`url(${m.banner})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
                    </div>
                )})
            }
            </Sliderify>}

               {movies && <Movielist movies={movies} title="All movies"/>}

               {movies && <Movielist movies={movies.filter((m)=>{return m.languages.includes("English")})} title="Hollywood movies"/>}

               {movies && <Movielist movies={movies.filter((m)=>{return m.rating>=9})} title="Top rated movies"/>}


            </div> );
}
 
export default Home;