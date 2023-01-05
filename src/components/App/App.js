import "./App.css";
import Home from "../Home/Home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
