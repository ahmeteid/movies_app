import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        moviesDispatch: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;

export const useMovieContext = () => {
  return useContext(GlobalContext);
};
