import MDXComponents from "@/components/MDXComponent";
import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MDXProvider components={MDXComponents}>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </MDXProvider>
    );
}
