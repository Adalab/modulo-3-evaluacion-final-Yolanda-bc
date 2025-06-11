import CharacterCard from "./CharacterCard";

function CharacterCardList({ characters }) {
  return (
    <ul className="card_list">
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterCardList;
