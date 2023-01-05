import "./App.css";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import { Route, Routes } from "react-router";

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
      <Route exact path="/addComic" element={<Form />} />
    </Routes>
  );
}

export default App;
