import FadeInSection from "@/components/FadeInSection";

const SectionTheme: React.FC = () => {
	return (
		<FadeInSection className="relative flex items-center justify-center bg-gray-100 h-44">
			<article className="z-10">
				<h1
					className="text-3xl font-semibold tracking-tight text-center uppercase"
					data-aos="fadeInUp">
					Theme
				</h1>
				<h2
					className="text-xl tracking-wide text-center text-slate-600"
					data-aos="fadeInUp">
					Back To School
				</h2>
			</article>
		</FadeInSection>
	);
};

export default SectionTheme;
