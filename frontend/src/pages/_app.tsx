import 'react-responsive-modal/styles.css';
import localFont from 'next/font/local';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@providers/auth';
import { ModalProvider } from '@providers/modal';
import { QueryProvider } from '@providers/query';
import Head from 'next/head';
import { ToastProvider } from '@providers/toast';
// import { Footer } from '@presentation/components/organisms/footer';

const myFont = localFont({
    src: [
        {
            path: '../../public/fonts/Pretendard-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Pretendard-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Pretendard-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Pretendard-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Pretendard-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
    ],
});

export default function App({
    Component,
    pageProps,
    router,
}: AppProps): JSX.Element {
    const { dehydratedState, session, ...rest } = pageProps;

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=0, shrink-to-fit=no, viewport-fit=cover"
                />
            </Head>
            <QueryProvider dehydratedState={dehydratedState}>
                <AuthProvider session={session}>
                    <EmotionProvider>
                        <main className={myFont.className}>
                            <ToastProvider>
                                <ModalProvider>
                                    <Component
                                        {...rest}
                                        key={router.asPath}
                                    />
                                </ModalProvider>
                            </ToastProvider>
                        </main>
                        <Footer />
                    </EmotionProvider>
                </AuthProvider>
            </QueryProvider>
        </>
    );
}
