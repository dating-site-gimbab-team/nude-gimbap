import React from "react";
import Head from "next/head";
import { NextComponentType } from "next";

interface RootAppProps {
	Component: NextComponentType;
	pageProps: any;
}


function RootApp({ Component, pageProps }: RootAppProps) {
	return (
		<React.Fragment>
			<Head>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
            <Component {...pageProps} />
		</React.Fragment>
	);
}

export default RootApp;