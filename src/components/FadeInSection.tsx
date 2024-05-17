"use client";

import { motion } from "framer-motion";

interface FadeInSectionProps {
	children: React.ReactNode;
	className?: string;
	duration?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
	children,
	className,
	duration = 0.6,
}) => {
	return (
		<motion.section
			className={className}
			animate={{ opacity: 1, scale: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ ease: "easeInOut", duration: duration }}>
			{children}
		</motion.section>
	);
};

export default FadeInSection;
