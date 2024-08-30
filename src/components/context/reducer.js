import * as actions from "./ActionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCLIST:
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case actions.REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        watchList: state.watchList.filter(
          (moive) => moive.imdbID !== action.payload
        ),
      };

    case actions.MOVE_TO_WATCHLIST:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watchList: [action.payload, ...state.watchList],
      };

    case actions.ADD_MOVIE_TO_WATCHED:
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watched: [action.payload, ...state.watched],
      };
    case actions.REMOVE_MMOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
};
