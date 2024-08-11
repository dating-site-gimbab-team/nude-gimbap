import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function useNextRouter(prefetchUrls?: string[]): NextRouter {
  const router = useRouter();

  useEffect(() => {
    if (!prefetchUrls) {
      return;
    }

    prefetchUrls.forEach(async (url) => {
      await router.prefetch(url);
    });
  }, []);

  return router;
}
