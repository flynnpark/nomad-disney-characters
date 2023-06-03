import { Link } from 'react-router-dom';

interface CharacterIconProps {
  character: Character;
}

function CharacterIcon({ character }: CharacterIconProps) {
  return (
    <Link to={`characters/${character.id}`}>
      <div>{character.name}</div>
    </Link>
  );
}

export default CharacterIcon;
