import FadeInSection from "@/components/FadeInSection";
import OutfitCarousel from "./OutfitCarousel";

const SectionDressCode: React.FC = () => {
	return (
		<FadeInSection>
			<article className="flex flex-col p-5 lg:flex-row-reverse">
				<div>
					<h1
						className="text-xl font-semibold tracking-tight text-center uppercase"
						data-aos="fadeInUp">
						DRESS CODE
					</h1>
					<p
						className="p-5 tracking-wide text-justify text-slate-600 indent-4"
						data-aos="fadeInUp">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the
						industry&apos;s standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of
						Letraset sheets containing Lorem Ipsum passages, and
						more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
				<div className="w-full lg:w-1/3" data-aos="fadeInUp">
					<OutfitCarousel />
				</div>
			</article>
		</FadeInSection>
	);
};

export default SectionDressCode;
