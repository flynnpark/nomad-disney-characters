import { QueryClient } from '@tanstack/react-query';

export const queryKey = ['characters'];

export const loader = (queryClient: QueryClient) => async (): Promise<Character[]> => {
  return (
    queryClient.getQueryData<GetCharactersResponse>(queryKey) ??
    (await queryClient.fetchQuery<GetCharactersResponse>(queryKey))
  );
};
