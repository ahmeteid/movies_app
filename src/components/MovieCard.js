import "./MoviCard.css";
import MovieControls from "./MovieControls";

function MovieCard(props) {
  const { movie, type } = props;
  return (
    <>
      <div className="movie-card">
        <div className="overlay"></div>
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
        <MovieControls movie={movie} type={type} />
      </div>
    </>
  );
}

export default MovieCard;
