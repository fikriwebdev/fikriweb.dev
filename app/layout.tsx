import { PropsWithChildren } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

// These styles apply to every route in the application
import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/code-highlight.css";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Muhamad Fikri",
    description:
        " I like to create front-end solutions  that are fast, flexible, and flawless.",
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider>
                    <Header />

                    <main className="flex-1 container mx-auto">
                        <div className="min-h-screen mt-[var(--header-height)] container max-w-7xl mx-auto px-4 md:px-0">
                            <div className="pt-8 flex flex-col">{children}</div>
                        </div>
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
