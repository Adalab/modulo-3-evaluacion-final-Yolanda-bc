import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import CharacterCard from "./CharacterCard";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
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

  // Filtrado de personajes
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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  search={search}
                  setSearch={setSearch}
                  selectedHouse={selectedHouse}
                  setSelectedHouse={setSelectedHouse}
                />
                <ul className="gallery">
                  {/*length obtiene el numero de los personajes que se filtra
          ? condicion verdadera y : condicion falsa*/}
                  {filteredCharacters.length === 0 ? (
                    <li>No existen personajes con ese nombre.</li>
                  ) : (
                    filteredCharacters.map((character) => (
                      <CharacterCard key={character.id} character={character} />
                    ))
                  )}
                </ul>
              </>
            }
          />
          <Route
            path="/detail/:characterId"
            element={<CharacterDetail characters={characters} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
