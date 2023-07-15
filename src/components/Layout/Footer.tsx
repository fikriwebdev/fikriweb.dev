import navs from "@/constant/navs";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="container max-w-7xl mx-auto px-0 md:px-4 mt-12 border-t border-gray-200 dark:border-gray-800 mb-8">
            <div className="text-center pt-4 text-gray-800 dark:text-gray-300">
                <div className="flex items-center gap-4 justify-center">
                    {navs.map(nav => (
                        <Link key={nav.href} href={nav.href}>
                            <span className="text-sm hover:text-gray-300 transition-colors duration-300">
                                {nav.label}
                            </span>
                        </Link>
                    ))}
                </div>
                <p className="mt-4 text-sm">
                    &copy; Muhamad Fikri {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}
