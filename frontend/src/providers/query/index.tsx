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
                        // suspense 는 v5로 오면서 fetching 안정화가 되어서 옵션에서 삭제
                        throwOnError: true, // v4 -> v5 이름 변경
                        retry: 3, // v4 -> v5 이름 변경
                        refetchOnWindowFocus: false,
                        // gcTime: 1000 * 60 * 7, // 7분 동안 캐시로 저장, v4 -> v5 이름 변경
                        staleTime: 1000 * 60 * 1, // 1분 이내에는 캐시된 결과를 사용
                    },
                    mutations: {
                        throwOnError: false, // v4 -> v5 이름 변경
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
