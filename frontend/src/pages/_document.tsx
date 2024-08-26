import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
    return (
        <Html lang="ko">
            <Head>
                <meta charSet="utf-8" />
                <meta name="version" content="20240826-1" />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/assets/images/logo_32.png"
                    key="icon32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/assets/images/logo_16.png"
                    key="icon16"
                />
                <link rel="icon" href="/favicon.ico" key="favicon" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
