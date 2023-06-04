import { Link } from 'react-router-dom';
import styled from 'styled-components';

import notFoundImage from '../assets/not_found.png';

const Container = styled.div`
  display: flex;
  padding: auto;
  text-align: center;
  justify-content: center;
  margin: 24px 0;
`;

const Avatar = styled.img`
  vertical-align: middle;
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const CharacterName = styled.p`
  margin-top: 16px;
`;

interface CharacterIconProps {
  character: Character;
}

function CharacterIcon({ character }: CharacterIconProps) {
  const { imageUrl, name } = character;
  console.log(name, imageUrl);
  return (
    <Container>
      <Link to={`characters/${character.id}`}>
        <Avatar src={imageUrl ?? notFoundImage} alt={name} />
        <CharacterName>{name}</CharacterName>
      </Link>
    </Container>
  );
}

export default CharacterIcon;
