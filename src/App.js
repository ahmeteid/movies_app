import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from "./components/Add";
import ContextProvider from "./components/context/GlobalContext";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ContextProvider>
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
