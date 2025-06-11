import { Link, useParams } from "react-router-dom";
//character es una prop que se pasa desde el componente CharacterCard.
function CharacterDetail({ characters }) {
  //characterName es el nombre del personaje que se pasa en la URL.
  const { characterId } = useParams();

  const character = characters.find((char) => String(char.id) === characterId);

  if (!character) {
    return (
      <div>
        <p>Personaje no encontrado.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }
  // ? si es positivo : si es negativo
  const imageUrl = character.image
    ? character.image
    : `https://placehold.co/210x295/666666/ffffff?text=${encodeURIComponent(
        character.name
      )}`;

  return (
    <div className="detail">
      <Link className="link_inicio" to="/">
        Volver al inicio
      </Link>
      <h2 className="detail_name">{character.name}</h2>
      <img className="detail_imagen" src={imageUrl} alt={character.name} />
      <p>
        <strong>Casa:</strong> {character.house || "Desconocida"}
      </p>
      <p>
        <strong>Estado:</strong> {character.alive ? "Vivo" : "Muerto"}
      </p>
      <p>
        <strong>Género:</strong> {character.gender}
      </p>
      <p>
        <strong>Especie:</strong> {character.species}
      </p>
    </div>
  );
}

export default CharacterDetail;
