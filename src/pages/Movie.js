import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie,setMovie] = useState({})
  const params = useParams()
  const movieId = params.id

  const fetchMovie = async () => {
    const resp = await fetch(`http://localhost:4000/movies/${movieId}`)
    .catch(err => console.error(err))
    const fetchedMovie = await resp.json()
    setMovie(fetchedMovie)
  }
  useEffect(()=>{
    fetchMovie()
  },[movieId])

  if(!movie.title) return <h1>Loading...</h1>
  const {title, time, genres} = movie
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{title}</h1>
        <p>{time} minutes</p>
        {genres.map(genre=><span>{genre}</span>)}
      </main>
    </>
  );
};

export default Movie;
