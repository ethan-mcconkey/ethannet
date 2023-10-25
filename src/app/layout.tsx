import type { Metadata } from "next";
import React from "react";

import "./globals.css";

export const metadata: Metadata = {
    title: "Ethan's Website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
                <footer>
                    {"\u00A9"} 2023 Ethan McConkey. All Rights Reserved
                </footer>
            </body>
        </html>
    );
}
