"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function Template({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		AOS.init({
			easing: "ease-in-out",
			duration: 1000,
		});
	}, []);
	return (
		<motion.main
			initial={{ y: 0, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.75 }}>
			<Toaster />
			{children}
		</motion.main>
	);
}
