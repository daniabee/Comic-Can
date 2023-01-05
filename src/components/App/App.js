import "./App.css";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import { Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div>
            <Home />
            <NavBar />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
