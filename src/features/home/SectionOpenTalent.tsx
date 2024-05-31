import FadeInSection from "@/components/FadeInSection";
import WhatsAppButtons from "@/components/WhatsAppButtons";
import Image from "next/image";

const SectionOpenTalent: React.FC = () => {
	return (
		<FadeInSection>
			<article className="flex flex-col p-5 lg:flex-row-reverse">
				<div>
					<h1
						className="text-xl font-semibold tracking-tight text-center uppercase"
						data-aos="fadeInUp">
						OPEN TALENT
					</h1>
				</div>
				<div
					className="flex flex-col items-center justify-center gap-3 p-5 tracking-wide text-slate-600 indent-4"
					data-aos="fadeInUp">
					<Image
						src={"/assets/images/event.jpg"}
						alt="Poster"
						height={300}
						width={300}
						className="w-[90%] h-auto rounded-3xl"
						data-aos="fadeInUp"
					/>
					<WhatsAppButtons />
				</div>
			</article>
		</FadeInSection>
	);
};

export default SectionOpenTalent;
