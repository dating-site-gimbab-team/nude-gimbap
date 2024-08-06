import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, { Head, Main, NextScript, Html } from "next/document";

export default class RootDocument extends Document {
	static async getInitialProps(ctx: any) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<React.Fragment>
						{sheet.getStyleElement()}
						{initialProps.styles}
					</React.Fragment>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="ko">
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content="rgba(246, 248, 255, 0.6)" />
					<link rel="apple-touch-icon" href="/imgs/icon_128.png" />
					<link rel="icon" href="/imgs/icon_128.png" />
					<link rel="manifest" href="/manifest.json" />
					{/* <script data-ad-client="ca-pub-xxx" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}