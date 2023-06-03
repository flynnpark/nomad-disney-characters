import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getQueryKey } from './loader';

function Character() {
  const { id } = useParams() as { id: string };
  const { data: character } = useQuery<GetCharacterDetailResponse>(getQueryKey(id));

  return (
    <>
      <h1>{character?.name}</h1>
    </>
  );
}

export default Character;
