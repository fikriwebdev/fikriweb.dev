import clsm from "@/utils/clsm";
import Image, { ImageProps } from "next/image";
import React from "react";

type BlurryImageProps = ImageProps & { blurSrc: string };

export default function BlurryImage({
    blurSrc,
    alt,
    ...rest
}: BlurryImageProps) {
    const [load, setLoad] = React.useState(false);

    return (
        <div className="relative w-full h-full">
            <div className="w-full h-full relative z-10">
                <Image
                    alt={alt}
                    src={blurSrc}
                    fill
                    className={clsm(
                        "object-cover object-center ",
                        load ? "hidden" : "block"
                    )}
                />
                <div
                    className={clsm(
                        "w-full h-full bg-white/30 relative backdrop-blur-sm transition-opacity duration-500",
                        load ? "opacity-0" : "opacity-100"
                    )}
                />
            </div>
            <Image
                {...rest}
                alt={alt}
                style={{ objectFit: "cover" }}
                onLoad={() => {
                    setTimeout(() => {
                        setLoad(true);
                    }, 500);
                }}
            />
        </div>
    );
}
