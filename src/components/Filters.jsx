import CharacterCard from "./CharacterCard";

function Filters({ search, setSearch, selectedHouse, setSelectedHouse }) {
  return (
    <>
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
    </>
  );
}

export default Filters;
