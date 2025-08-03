import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});
export const metadata: Metadata = {
	title: "Ahmed Mohammed| Portfolio",
	description: "Lets connect!!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
			<meta name="google-adsense-account" content="ca-pub-2449405226749473" />
			</head>
			<body className={fontSans.variable}>{children}</body>
		</html>
	);
}
