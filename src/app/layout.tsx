import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ethan's Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html data-testid="layout-html" lang="en">
			<body data-testid="layout-body">{children}</body>
		</html>
	);
}
