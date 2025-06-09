import { useState } from 'react'

const MoviesState = () => {
  const [movie, setMovie] = useState({
    title: 'Goodfellas',
    ratings: 9,
  })

  const handleClick = () => {
   /*  const copyMovie = {
        ...movie,
        ratings: 10,
    } 
    */
    setMovie({...movie, ratings: 10});
  }

  return (
    <div>
        <h1 style={{ marginTop:"20px" }}>Movies :</h1>
        <h2>Title: {movie.title}</h2>
        <p>Rating: {movie.ratings}</p>

        <button onClick={handleClick} style={{ border: "1px solid black", padding:"5px", marginLeft:"5px", fontSize:"15px" }}>Rating Change</button>
    </div>
  )
}

export default MoviesState;

/*
for array of objects check 2:03:13 of HuXn WebDev 50+ hrs of react
*/