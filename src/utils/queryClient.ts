import type { QueryFunctionContext } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  const { data } = await axios.get(`https://disney_api.nomadcoders.workers.dev/${queryKey.join('/')}`);
  return data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      staleTime: 1000 * 60 * 5,
    },
  },
});
