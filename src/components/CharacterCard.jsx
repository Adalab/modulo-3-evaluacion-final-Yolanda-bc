// src/components/CharacterCard.jsx
function CharacterCard({ character }) {
  const imageUrl = character.image
    ? character.image
    : `https://placehold.co/210x295/666666/ffffff?text=${encodeURIComponent(
        character.name
      )}`;

  return (
    <li className="card">
      <figure>
        <img src={imageUrl} alt={character.name} className="image" />
        <figcaption>{character.name}</figcaption>
        <p>{character.species}</p>
      </figure>
    </li>
  );
}

export default CharacterCard;
