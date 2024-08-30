import { useMovieContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";
import "./WatchList.css";

function WatchList() {
  const MovieContext = useMovieContext();

  return (
    <>
      <div className="watch-list">
        <div className="container">
          <div className="main-heading">
            <h1>My WatchList</h1>
            <span className="movies-count">
              {MovieContext.watchList.length}
              {MovieContext.watchList.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>
          {MovieContext.watchList.length > 0 ? (
            <div className="movie-grid">
              {MovieContext.watchList.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} type="watchList" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No Movies in your list, Add some!</h2>
          )}
        </div>
      </div>
    </>
  );
}
export default WatchList;
