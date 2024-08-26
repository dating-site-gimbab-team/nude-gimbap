import { Login } from '@presentation/features/login';
import { BaseLayout } from '@presentation/layouts/base';
import type { NextPage } from 'next';
import Head from 'next/head';

export const LoginPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>로그인</title>
            </Head>
            <BaseLayout>
                <Login />
            </BaseLayout>
        </>
    );
};

export default LoginPage;
