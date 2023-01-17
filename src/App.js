import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

//c032e2d7

const ApiUrl = "http://www.omdbapi.com?apikey=c032e2d7";

// const movie1 = {
//   Title: "Spiderman",
//   Year: "2010",
//   imdbID: "tt1785572",
//   Type: "movie",
//   Poster: "N/A",
// };

function App() {
  const [movies, setMoives] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies("");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${ApiUrl}&s=${title}`);
    const data = await response.json();

    setMoives(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Moive found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
