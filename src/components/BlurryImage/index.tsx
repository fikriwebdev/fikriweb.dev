/* eslint-disable @next/next/no-img-element */
import useIsMounted from "@/hooks/useIsMounted";
import clsm from "@/utils/clsm";
import React, { ComponentProps } from "react";

type BlurryImageProps = ComponentProps<"img"> & { blurSrc: string };

export default function BlurryImage({
    blurSrc,
    alt,
    ...rest
}: BlurryImageProps) {
    const [load, setLoad] = React.useState(false);

    const ref = React.useRef<HTMLImageElement>(null);

    const isMounted = useIsMounted();

    return (
        <div className="relative w-full h-full">
            <img
                src={blurSrc}
                alt={alt}
                className={clsm(
                    "absolute inset-0 w-full h-full z-[1] object-cover object-center transition-opacity duration-500 blur-xl",
                    load ? "opacity-0" : "opacity-100"
                )}
            />
            {isMounted ? (
                <img
                    ref={ref}
                    {...rest}
                    alt={alt}
                    className="object-cover object-center w-full h-full scale-105"
                    onLoad={() => setLoad(true)}
                />
            ) : null}
        </div>
    );
}
