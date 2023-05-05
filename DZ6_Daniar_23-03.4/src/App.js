import { useEffect, useState } from "react";
import { fetchPokemons } from "./api/getPokemons";
import { PokemonCard } from "./components/PokemonCard";
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    fetchPokemons(offset)
      .then((pokeList) => setPokemonList(pokeList))
      .catch((error) => console.error(error));
  }, [offset]);

  const handlePrev = () => {
    if (offset <= 0) return;
    setOffset((prevOffset) => prevOffset - 7);
  };

  const handleNext = () => {
    setOffset((prevOffset) => prevOffset + 7);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <div className="btnBox">
          <button className="themeBtn" onClick={handlePrev}>
            Prev
          </button>
          <button className="themeBtn" onClick={toggleTheme}>
            Change Theme
          </button>
          <button className="themeBtn" onClick={handleNext}>
            Next
          </button>
        </div>

        <div className="pokemonList">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
}
