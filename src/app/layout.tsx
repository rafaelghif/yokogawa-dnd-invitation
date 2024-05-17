import type { Metadata } from "next";
import "./globals.css";

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
			<body className="h-screen">
				{children}
				<footer className="absolute bottom-0 text-center w-full">
					<span>Yokogawa Manufacturing Batam &copy; 2024</span>
				</footer>
			</body>
		</html>
	);
}
