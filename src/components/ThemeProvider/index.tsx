import { ThemeProvider as NextThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export default function ThemeProvider({ children }: PropsWithChildren) {
    return (
        <NextThemeProvider defaultTheme="dark" attribute="class">
            {children}
        </NextThemeProvider>
    );
}
