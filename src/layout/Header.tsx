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
    <header className="w-full h-16 border-b border-gray-400 sticky top-0 left-0 right-0">
      <div className="container h-full mx-auto">
        <div className="flex items-center h-full justify-between">
          <h1 className="text-gray-800 dark:text-white">Logo</h1>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
