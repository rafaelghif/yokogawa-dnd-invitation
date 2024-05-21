import type { Metadata } from "next";
import "./globals.css";
import { Source_Sans_3 } from "next/font/google";
const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Yokogawa DND Invitation",
	description: "Yokogawa Manufacturing Batam DND Event Invitation",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={sourceSans3.className}>
				{children}
				<footer className="text-center w-full">
					<span>Yokogawa Manufacturing Batam &copy; 2024</span>
				</footer>
			</body>
		</html>
	);
}
