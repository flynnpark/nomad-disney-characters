import { QueryClient } from '@tanstack/react-query';
import type { LoaderFunctionArgs } from 'react-router-dom';

export const getQueryKey = (id: string) => ['characters', id];

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    if (!params.id) {
      throw new Response('', {
        status: 404,
        statusText: 'Not Found',
      });
    }
    const queryKey = getQueryKey(params.id);
    return queryClient.getQueryData(queryKey) ?? (await queryClient.fetchQuery(queryKey));
  };
