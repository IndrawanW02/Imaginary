import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Gallery from "./Gallery";

function App() {
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchQuery = document.getElementById("search-query").value;

    if (searchQuery !== "") {
      navigate(`search?query=${searchQuery}`);
    }
  };

  return (
    <>
      <div className="search-bar">
        <input id="search-query"></input>
        <button id="search-button" onClick={handleSearch}>
          search
        </button>
      </div>

      <Routes>
        <Route path="search" element={<Gallery></Gallery>}></Route>
      </Routes>
    </>
  );
}

export default App;
