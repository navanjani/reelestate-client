import "./main.scss";
import "./App.css";
import { NavBar } from "./components";
import { Routes, Route } from "react-router-dom";
import { AboutUsPage, HomePage, ListingsPage, ViewingPage } from "./pages";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("English");
  return (
    <div className="App">
      <NavBar language={language} />
      <Routes>
        <Route
          path="/"
          element={<HomePage language={language} setLanguage={setLanguage} />}
        />
        <Route path="/listing" element={<ListingsPage />} />
        <Route
          path="/about/:language"
          element={<AboutUsPage language={language} />}
        />
        <Route path="/viewing" element={<ViewingPage />} />
      </Routes>
    </div>
  );
}

export default App;
