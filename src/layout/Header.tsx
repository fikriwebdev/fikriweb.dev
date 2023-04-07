import Button from "@/components/Button";
import { ThemeContext } from "@/components/ThemeProvider";
import { useTheme } from "next-themes";
import React from "react";
import { BsSun } from "react-icons/bs";

const ToggleTheme = () => {
  const { mounted } = React.useContext(ThemeContext);
  const { theme, setTheme } = useTheme();

  if (!mounted) return null;
  return (
    <Button
      variant="outline"
      aria-label="toggle theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <BsSun className="w-4 h-4" />
      {theme}
    </Button>
  );
};

export default function Header() {
  return (
    <header className="w-full h-16 border-b bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-500 sticky top-0 left-0 right-0 z-50">
      <div className="container h-full mx-auto px-4 md:px-0">
        <div className="flex items-center h-full justify-between">
          <h1 className="text-transparent text-2xl font-extrabold bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text">
            FikriUI.com
          </h1>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
