import { Link } from "react-router-dom";

const Movielist = ({movies , title}) => {
    return ( <>
                <h1 className="title">{title}</h1>
                <div className="all-movies">
                    {
                        movies.map((movie)=>{
                            return(
                                <div className='movie' 
                                style={{background:`linear-gradient(transparent 0% , transparent 50%  , black), url(${movie.poster})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                                    <Link to={`/description/${movie.id}`}>
                                        <h1>{movie.moviename}</h1>
                                        <h3>{movie.release_date}</h3>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </> );
}
 
export default Movielist;