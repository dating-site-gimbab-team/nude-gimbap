import { Profile } from '@presentation/features/profile';
import { BaseLayout } from '@presentation/layouts/base';
import type { NextPage } from 'next';
import Head from 'next/head';

export const ProfilePage: NextPage = () => {
  return (
      <>
          <Head>
              <title>프로필</title>
          </Head>
          <BaseLayout>
              <Profile />
          </BaseLayout>
      </>
  );
};

export default ProfilePage;
