import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import HomePage from "./pages/HomePage";
import PokemonDetails from "./pages/PokemonDetails";
import Searchbar from "./components/Searchbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route
          path="/pokemon/:pokemonName"
          element={<PokemonDetails></PokemonDetails>}
        />
      </Routes>
    </BrowserRouter>
  );
}
