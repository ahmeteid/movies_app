import { useMovieContext } from "./context/GlobalContext";
import * as actions from "./context/ActionType";
import "./MoviCard.css";

function MovieControls(props) {
  const MovieContext = useMovieContext();

  return (
    <>
      <div className="inner-card-controls">
        {props.type === "watchList" && (
          <>
            <button
              onClick={() =>
                MovieContext.moviesDispatch({
                  type: actions.ADD_MOVIE_TO_WATCHED,
                  payload: props.movie,
                })
              }
              className="ctrl-btn"
            >
              <i className="fa-solid fa-eye"></i>
            </button>
            <button
              onClick={() =>
                MovieContext.moviesDispatch({
                  type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                  payload: props.movie.imdbID,
                })
              }
              className="ctrl-btn"
            >
              <i className="fa-fw fa fa-times"></i>
            </button>
          </>
        )}
        {props.type === "watched" && (
          <>
            <button
              onClick={() =>
                MovieContext.moviesDispatch({
                  type: actions.MOVE_TO_WATCHLIST,
                  payload: props.movie,
                })
              }
              className="ctrl-btn"
            >
              <i className="fa-solid fa-eye-slash"></i>
            </button>
            <button
              onClick={() =>
                MovieContext.moviesDispatch({
                  type: actions.REMOVE_MMOVIE_FROM_WATCHED,
                  payload: props.movie.imdbID,
                })
              }
              className="ctrl-btn"
            >
              <i className="fa-fw fa fa-times"></i>
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default MovieControls;
