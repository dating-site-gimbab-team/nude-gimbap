import { Like } from '@presentation/features/like';
import { BaseLayout } from '@presentation/layouts/base';
import type { NextPage } from 'next';
import Head from 'next/head';

export const LikePage: NextPage = () => {
  return (
      <>
          <Head>
              <title>좋아요</title>
          </Head>
          <BaseLayout>
              <Like />
          </BaseLayout>
      </>
  );
};

export default LikePage;
