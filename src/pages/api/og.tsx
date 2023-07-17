import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
    runtime: "edge",
};

export default function handler(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
        ? searchParams.get("title")?.slice(0, 100)
        : "My default title";

    return new ImageResponse(
        (
            <div
                style={{
                    background: "#0f172a",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        right: -110,
                        top: -110,
                        width: "512px",
                        height: "512px",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "radial-gradient(#4C1D95, transparent)",
                        borderRadius: 9999,
                        filter: "blur(16px)",
                    }}
                ></div>
                <h1
                    style={{
                        color: "transparent",
                        fontWeight: "bold",
                        fontSize: 128,
                        background:
                            "linear-gradient(to bottom left, #BC4AF1, #0C74D4)",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitBackgroundClip: "text",
                    }}
                >
                    {title ? title : "fikriweb.dev"}
                </h1>
                <div
                    style={{
                        position: "absolute",
                        left: -110,
                        bottom: -110,
                        width: "512px",
                        height: "512px",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "radial-gradient(#1E3A8A, transparent)",
                        borderRadius: 9999,
                        filter: "blur(16px)",
                    }}
                ></div>
            </div>
        ),
        {
            width: 1200,
            height: 600,
        }
    );
}
