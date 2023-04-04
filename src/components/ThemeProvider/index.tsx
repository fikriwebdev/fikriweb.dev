import React, { PropsWithChildren } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeContext = React.createContext({ mounted: false });

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <ThemeContext.Provider value={{ mounted }}>
      <NextThemeProvider defaultTheme="light" attribute="class">
        {children}
      </NextThemeProvider>
    </ThemeContext.Provider>
  );
}
