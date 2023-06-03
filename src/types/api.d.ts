interface Character {
  id: number;
  imageUrl: string;
  name: string;
}

type GetCharactersResponse = Character[];

interface CharacterDetail extends Character {
  sourceUrl: string;
  films: string[];
}

type GetCharacterDetailResponse = CharacterDetail;
