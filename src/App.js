import "./main.scss";
import "./App.css";
import { NavBar } from "./components";
import { Routes, Route } from "react-router-dom";
import { AboutUsPage, HomePage, ListingsPage } from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing" element={<ListingsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
