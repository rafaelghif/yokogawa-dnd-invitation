"use client";

import { motion } from "framer-motion";

interface FadeInDivProps {
	children: React.ReactNode;
	className?: string;
	duration?: number;
}

const FadeInDiv: React.FC<FadeInDivProps> = ({
	children,
	className,
	duration = 0.6,
}) => {
	return (
		<motion.div
			className={className}
			animate={{ opacity: 1, scale: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ ease: "easeInOut", duration: duration }}>
			{children}
		</motion.div>
	);
};

export default FadeInDiv;
