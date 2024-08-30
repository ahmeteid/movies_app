import { useMovieContext } from "./context/GlobalContext";
import "./ResultCard.css";
import * as actions from "./context/ActionType";

function ResultCard(props) {
  // const { movie } = props;

  const MovieContext = useMovieContext();

  const storedMovieWatchList = MovieContext.watchList.find(
    (storedMovie) => storedMovie.imdbID === props.movie.imdbID
  );

  const storedMovieWatched = MovieContext.watched.find(
    (storedMovie) => storedMovie.imdbID === props.movie.imdbID
  );

  const watchListDsiabled = storedMovieWatchList
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <>
      <div className="result-card">
        <div className="poster-wrapper">
          {props.movie.Poster ? (
            <img src={props.movie.Poster} alt={props.movie.Title} />
          ) : (
            <div className="filter-poster"></div>
          )}
        </div>
        <div className="info">
          <div className="heading">
            <h3 className="title">{props.movie.Title}</h3>
            {props.movie.Year ? (
              <h4 className="release-date">{props.movie.Year}</h4>
            ) : (
              "-"
            )}
          </div>
          <div className="controls">
            <button
              onClick={() =>
                MovieContext.moviesDispatch({
                  type: actions.ADD_MOVIE_TO_WATCLIST,
                  payload: props.movie,
                })
              }
              className="btn"
              disabled={watchListDsiabled}
            >
              Add To WatchList
            </button>
            <button
              onClick={() =>
                MovieContext.moviesDispatch({
                  type: actions.ADD_MOVIE_TO_WATCHED,
                  payload: props.movie,
                })
              }
              className="btn"
              disabled={watchedDisabled}
            >
              Add To Watched
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultCard;
