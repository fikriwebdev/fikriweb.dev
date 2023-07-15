import { PropsWithChildren } from "react";
import ThemeProvider from "../ThemeProvider";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <ThemeProvider>
            <Header />

            <main className="flex-1 relative min-h-screen">
                <div className=" mt-[var(--header-height)] container max-w-7xl mx-auto px-4 md:px-0 ">
                    <div className="pt-8 flex flex-col">{children}</div>
                </div>
            </main>
            <Footer />
        </ThemeProvider>
    );
}
