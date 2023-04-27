import { ThemeContext } from "@/components/ThemeProvider";
import navs from "@/constant/navs";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { BsSun } from "react-icons/bs";

const ToggleTheme = () => {
  const { mounted } = React.useContext(ThemeContext);
  const { theme, setTheme } = useTheme();

  if (!mounted) return null;
  return (
    <button
      aria-label="toggle theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center gap-2"
    >
      <BsSun className="w-4 h-4" />
      {theme === "light" ? "dark" : "light"}
    </button>
  );
};

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 h-[var(--header-height)]">
      <div className="container max-w-7xl h-full mx-auto px-4 md:px-0  relative ">
        <div className="absolute inset-0 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center h-full justify-between border-b border-gray-200 dark:border-gray-800/70 px-0 md:px-4">
          <h1 className="text-transparent text-2xl font-extrabold bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text">
            F
            <span className="text-black dark:text-white text-sm font-normal">
              webdev
            </span>
          </h1>
          <ul className="flex items-center gap-8">
            {navs.map((nav) => (
              <li
                key={nav.href}
                className="text-sm hover:text-emerald-400 transition-colors duration-300"
              >
                <Link href={nav.href}>{nav.label}</Link>
              </li>
            ))}
          </ul>
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
}
