import { useEffect, useState } from "react";
import "./Add.css";
import axios from "axios";
import ResultCard from "./ResultCard";

function Add() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const getDataFromApi = () => {
    const api_url = `https://www.omdbapi.com/?s=${searchValue} man&apikey=814d7de7`;
    axios
      .get(api_url)
      .then((res) => {
        if (res.data.Search) {
          setMovies(res.data.Search);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDataFromApi();
  }, [searchValue]);

  return (
    <>
      <div className="add-page">
        <div className="container">
          <div className="add-content">
            <div className="input-container">
              <input
                type="text"
                placeholder="Search for a movie"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            {movies.length > 0 && (
              <ul className="results">
                {movies.map((movie) => (
                  <li key={movie.imdbID}>{<ResultCard movie={movie} />}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
