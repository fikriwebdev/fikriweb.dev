"use client";

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerOverlay,
    DrawerPortal,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/Drawer";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import navs from "../../constant/navs";
import useIsMounted from "@/hooks/useIsMounted";

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();

    const isMounted = useIsMounted();

    if (!isMounted) return null;

    return (
        <ThemeSwitch
            onCheckedChange={checked => setTheme(checked ? "dark" : "light")}
            checked={theme === "dark"}
        />
    );
};

const Hamburger = () => {
    return (
        <Drawer>
            <DrawerTrigger>
                <button>
                    <BiMenuAltRight className="text-2xl" />
                </button>
            </DrawerTrigger>
            <DrawerPortal>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerTitle></DrawerTitle>
                    <DrawerDescription className="mt-8">
                        <ul className="flex flex-col items-start gap-8">
                            {navs.map(nav => (
                                <Link key={nav.href} href={nav.href}>
                                    <li className="text-xl animate-navSlideBottom">
                                        {nav.label}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </DrawerDescription>
                </DrawerContent>
            </DrawerPortal>
        </Drawer>
    );
};

export default function Header() {
    return (
        <header className="w-full fixed top-0 left-0 right-0 z-50 h-[var(--header-height)]">
            <div className="container max-w-full md:max-w-7xl h-full mx-auto px-4 md:px-0  relative">
                <div className="absolute inset-0 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center h-full justify-between border-b border-gray-200/30 dark:border-gray-800/30 px-4">
                    <h1 className="w-6 text-transparent text-2xl font-extrabold bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text">
                        <Link href="/">
                            F
                            <span className="text-black dark:text-white text-sm font-normal"></span>
                        </Link>
                    </h1>
                    <ul className="items-center gap-8 hidden md:flex">
                        {navs.map(nav => (
                            <li
                                key={nav.href}
                                className="text-sm hover:text-gray-300 transition-colors duration-300"
                            >
                                <Link href={nav.href}>{nav.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <ToggleTheme />
                    <div className=" block md:hidden">
                        <Hamburger />
                    </div>
                </div>
            </div>
        </header>
    );
}
