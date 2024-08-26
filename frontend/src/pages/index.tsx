import { Feed } from '@presentation/features/feed';
import { BaseLayout } from '@presentation/layouts/base';
import type { NextPage } from 'next';
import Head from 'next/head';

export const FeedPage: NextPage = () => {
  return (
      <>
          <Head>
              <title>피드</title>
          </Head>
          <BaseLayout>
              <Feed />
          </BaseLayout>
      </>
  );
};

export default FeedPage;
