// CharacterCardList.jsx
import CharacterCard from "./CharacterCard";

function CharacterCardList({ characters }) {
  return (
    <ul className="card-list">
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterCardList;
