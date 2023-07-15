import "../../styles/globals.css";
import "../../styles/code-highlight.css";

import SEO from "next-seo.config";

import { Poppins } from "next/font/google";

import Layout from "@/components/Layout";
import { DefaultSeo } from "next-seo";
import { AppType } from "next/app";
import Head from "next/head";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
    return (
        <>
            <DefaultSeo {...SEO} />
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <div className={poppins.className}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
        </>
    );
};

export default MyApp;
