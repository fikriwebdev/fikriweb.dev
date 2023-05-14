import MDXComponents from "@/components/MDXComponent";
import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import defaultSeo from "../../next-seo.config";
import "../styles/code-highlight.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MDXProvider components={MDXComponents}>
            <ThemeProvider>
                <DefaultSeo {...defaultSeo} />
                <Component {...pageProps} />
            </ThemeProvider>
        </MDXProvider>
    );
}
