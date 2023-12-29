import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ScaleLoader from 'react-spinners/ScaleLoader'
import '../styles/description.css'
import Movielist from "./Movielist";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Description = () => {

    let {id} = useParams();
    let[movie , setMovie] = useState(null);
    let[movies , setMovies] = useState(null);
    let navigate = useNavigate();


    useEffect(()=>{
        fetch("http://localhost:4000/movies/" + id)
        .then(res=>res.json())
        .then((data)=>{
            setMovie(data)
            console.log(data);
        })
        
        fetch("http://localhost:4000/movies")
        .then(res=>res.json())
        .then((data)=>{
            setMovies(data)
            console.log(data);
        })
    } , [])

    let handleDeleteMovie = ()=>{
        if( window.confirm("Are you sure ?") )
        {
            fetch("http://localhost:4000/movies/"+id , {method:"DELETE"})
            .then(()=>{
                toast("Movie is deleted from database" , {
                                                            position: "bottom-right",
                                                            autoClose: 5000});
                navigate("/")
            })
        }
    }

    
    return ( <div className="description-comp">

            {movie==null && <ScaleLoader size={450}/>}

            {movie &&  
            <>
                <div className="movie-description" style={{background : `url(${movie.banner})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                                <div className="container">
                                    <img src={movie.poster} alt="" />
                                    <div className="details">
                                        <h1>{movie.moviename}</h1>
                                        <span>{movie.languages.join("  ,  ")}</span>
                                        <span>{movie.genre}</span>
                                        <span>{movie.rating} 🌟  </span>
                                        <p>{movie.description}</p>
                                    </div>
                                </div>
                </div> 

                <div className="trailer">
                    <iframe width="560" height="315" src={movie.trailer_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <button className="del-btn" onClick={handleDeleteMovie}> Delete Movie </button>

                <Link to={`/update/${id}`} className="upd-btn">
                    <button> Update movie </button>
                </Link>

                {movies && <Movielist movies={movies.filter((m)=>{ return m.genre.includes(movie.genre)})} title="Similar Movies"/>}
            </>         
            }

            <ToastContainer />

            </div> );
}
 
export default Description;