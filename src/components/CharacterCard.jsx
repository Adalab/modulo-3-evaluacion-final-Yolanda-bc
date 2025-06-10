import { Link } from "react-router";

function CharacterCard({ character }) {
  const imageUrl = character.image
    ? character.image
    : /*$ es una función de JS que hace que aparezcan los datos de los personajes cuando no hay foto*/
      `https://placehold.co/210x295/666666/ffffff?text=${encodeURIComponent(
        character.name
      )}`;

  return (
    <Link to={"/characterId/" + character.id}>
      <li className="card">
        <figure>
          <img src={imageUrl} alt={character.name} className="image" />
          <figcaption>{character.name}</figcaption>
          <p>{character.species}</p>
        </figure>
      </li>
    </Link>
  );
}

export default CharacterCard;
