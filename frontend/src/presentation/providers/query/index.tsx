import {
    HydrationBoundary,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query';
  import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
  import { useState } from 'react';
  import type { QueryProviderProps } from './types';
  
  export function QueryProvider(props: QueryProviderProps): JSX.Element {
    const { children, dehydratedState } = props;
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        throwOnError: true,
                        retry: 3,
                        refetchOnWindowFocus: false,
                        gcTime: 1000 * 60 * 7,
                        staleTime: 1000 * 60 * 1, 
                    },
                    mutations: {
                        throwOnError: false,
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydratedState}>
                {children}
            </HydrationBoundary>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}