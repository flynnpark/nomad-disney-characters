import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import notFoundImage from '../../assets/not_found.png';
import { Avatar } from '../../components/commons';
import { OpenNewWindowIcon } from '../../components/icons';
import { getQueryKey } from './loader';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  margin-left: 32px;
`;

const CharacterName = styled.h1`
  font-size: 48px;
`;

const OpenSourceContainer = styled.div`
  margin-top: 8px;
`;

const OpenSourceLink = styled.a`
  font-size: 14px;
  cursor: pointer;
`;

const FilmsHeading = styled.h2`
  font-size: 32px;
  margin-top: 16px;
`;

const FilmList = styled.ul`
  display: block;
  list-style-type: disc;
  list-style-position: inside;
  padding-inline-start: 0.5em;
`;

const FilmListItem = styled.li`
  display: list-item;
  margin-top: 12px;
`;

function Character() {
  const { id } = useParams() as { id: string };
  const { data: character } = useQuery<GetCharacterDetailResponse>(getQueryKey(id));

  return (
    <Container>
      <Avatar size={300} src={character?.imageUrl ?? notFoundImage} alt={character?.name} />
      <InfoContainer>
        <CharacterName>{character?.name}</CharacterName>
        <OpenSourceContainer>
          <OpenSourceLink href={character?.sourceUrl} target="_blank">
            Open Source <OpenNewWindowIcon size={14} />
          </OpenSourceLink>
        </OpenSourceContainer>
        <FilmsHeading>Films</FilmsHeading>
        <FilmList>
          {character?.films.map((film) => (
            <FilmListItem>{film}</FilmListItem>
          ))}
        </FilmList>
      </InfoContainer>
    </Container>
  );
}

export default Character;
