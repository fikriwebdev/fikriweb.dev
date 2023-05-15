import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function clsm(...input: ClassValue[]) {
    return twMerge(clsx(input));
}
