import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import CharacterIcon from '../../components/CharacterIcon';
import { queryKey } from './loader';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

function Home() {
  const { data: characters } = useQuery<GetCharactersResponse>({ queryKey });
  return (
    <Container>
      {characters?.map((character) => (
        <CharacterIcon key={character.id} character={character} />
      ))}
    </Container>
  );
}

export default Home;
