// src/App.jsx
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import "../styles/App.scss";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  // Filtrar personajes por nombre
  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="principal_page">
      <header className="header">
        <h1 className="header_title">HARRY POTTER</h1>
      </header>

      <main>
        <form className="filters">
          <label htmlFor="search">Busca por personaje:</label>
          <input
            id="search"
            type="text"
            placeholder="Harry, Hermione, ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <ul className="gallery">
          {filteredCharacters.map((char, index) => (
            <CharacterCard key={index} character={char} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
