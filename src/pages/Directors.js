import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Person from "../components/Person";

function Directors() {
  const [directors, setDirectors] = useState([])
  const fetchDirectors = async () => {
    const resp = await fetch(`http://localhost:4000/directors`)
    const data = await resp.json()
    setDirectors(data)
  }
  useEffect(()=>{fetchDirectors()},[])

  if(!directors[0]) return <h1>Loading...</h1>
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map(director=><Person person={director} />)}
      </main>
    </>
  );
};

export default Directors;
