import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies,setMovies] = useState([])
  
  const fetchMovies = async () => {
    const resp = await fetch('http://localhost:4000/movies')
    const fetchedMovies = await resp.json()
    setMovies(fetchedMovies)
  }
  
  useEffect(()=>{
    fetchMovies()
  },[])
  const movieCards = movies.map(movie => <MovieCard movie={movie}/>)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies[0]? movieCards : <h2>Loading...</h2>}
      </main>
    </>
  );
};

export default Home;
