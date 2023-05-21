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
import useIsMounted from "@/hooks/useIsMounted";
import clsm from "@/utils/clsm";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import navs from "../../constant/navs";

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();

    const isMounted = useIsMounted();

    if (!isMounted) return <div className="w-20" />;

    return (
        <ThemeSwitch
            onCheckedChange={checked => setTheme(checked ? "dark" : "light")}
            checked={theme === "dark"}
        />
    );
};

interface NavItemProps {
    href: string;
    label: string;
    onClickLink?: () => void;
}

const NavItem = ({
    href,
    label,
    className,
    onClickLink,
    ...rest
}: NavItemProps & ComponentProps<"li">) => {
    const pathname = usePathname();
    const isActive =
        href === "/" ? pathname === href : pathname?.startsWith(href);

    return (
        <li
            key={href}
            className={clsm(
                "text-sm hover:text-gray-500 transition-colors duration-300",
                isActive ? "text-gray-500" : "",
                className
            )}
            {...rest}
        >
            <Link href={href} onClick={onClickLink}>
                {label}
            </Link>
        </li>
    );
};

const Hamburger = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Drawer open={isOpen} onOpenChange={open => setIsOpen(open)}>
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
                                <NavItem
                                    key={nav.href}
                                    href={nav.href}
                                    label={nav.label}
                                    className="text-xl animate-navSlideBottom"
                                    onClickLink={() => setIsOpen(false)}
                                />
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
            <div className="container max-w-full  h-full mx-auto px-4 md:px-0  relative">
                <div className="absolute inset-0  backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center h-full justify-between  dark:border-gray-800/30 px-4 container md:max-w-7xl mx-auto">
                    <h1 className="w-6 text-transparent text-2xl font-extrabold bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text">
                        <Link href="/">
                            F
                            <span className="text-black dark:text-white text-sm font-normal"></span>
                        </Link>
                    </h1>
                    <ul className="items-center gap-8 hidden md:flex">
                        {navs.map(nav => (
                            <NavItem
                                key={nav.href}
                                href={nav.href}
                                label={nav.label}
                            />
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
