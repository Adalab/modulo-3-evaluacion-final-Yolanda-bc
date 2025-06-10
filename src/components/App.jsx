// src/App.jsx
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import "../styles/App.scss";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  // Filtrar personajes por nombre y casa
  const filteredCharacters = characters.filter((char) => {
    const nameMatch = char.name.toLowerCase().includes(search.toLowerCase());
    const houseMatch = selectedHouse === "" || char.house === selectedHouse;
    return nameMatch && houseMatch;
  });

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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <label htmlFor="house">Selecciona la casa:</label>
          <select
            id="house"
            value={selectedHouse}
            onChange={(e) => setSelectedHouse(e.target.value)}
          >
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
        </form>

        <ul className="gallery">
          {filteredCharacters.map((char) => (
            <CharacterCard key={char.name} character={char} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
