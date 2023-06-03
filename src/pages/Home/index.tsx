import { useQuery } from '@tanstack/react-query';

import CharacterIcon from '../../components/CharacterIcon';
import { queryKey } from './loader';

function Home() {
  const { data: characters } = useQuery<GetCharactersResponse>({ queryKey });
  return (
    <>
      {characters?.map((character) => (
        <CharacterIcon key={character.id} character={character} />
      ))}
    </>
  );
}

export default Home;
