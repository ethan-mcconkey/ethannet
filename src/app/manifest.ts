import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Ethan's Website",
        short_name:
            "My personal website which will include some information about me and a blog.",
        description: "Next.js App",
        start_url: "/",
        display: "standalone",
        background_color: "#607081",
        theme_color: "#607081",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
