import type { Metadata } from "next";
import React from "react";
import { Josefin_Sans } from "next/font/google";

import "./globals.css";
import { Providers } from "@/components/Providers";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ethan's Website",
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={josefinSans.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
