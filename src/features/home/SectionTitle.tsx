import FadeInSection from "@/components/FadeInSection";
import Image from "next/image";

const SectionTitle: React.FC = () => {
	return (
		<FadeInSection className="relative">
			<article className="flex flex-col gap-3 p-5">
				<h1 className="text-xl font-semibold tracking-tight text-center uppercase lg:text-left">
					Yokogawa D&D Event 2024
				</h1>
				<div className="z-50 flex flex-col items-center justify-center gap-2 lg:flex-row-reverse">
					<div className="flex items-center justify-center lg:w-1/3">
						<Image
							src={"/assets/images/poster.jpg"}
							alt="Poster"
							height={300}
							width={300}
							className="w-[90%] h-auto rounded-3xl"
							data-aos="fadeInUp"
						/>
					</div>
					<div className="flex flex-col items-center gap-3 tracking-wide text-center text-slate-600 lg:w-2/3">
						<p
							className="px-5 text-justify"
							data-aos="fadeInUp">
							<span className="ml-5 mr-1 font-semibold">
								What is D&D?
							</span>
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry&apos;s standard dummy text ever since the
							1500s, when an unknown printer took a galley of type
							and scrambled it to make a type specimen book. It
							has survived not only five centuries, but also the
							leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the
							1960s with the release of Letraset sheets containing
							Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including
							versions of Lorem Ipsum.
						</p>
						<a
							href="#invitation"
							className="btn btn-primary"
							data-aos="fadeInUp">
							Join With Us
						</a>
					</div>
				</div>
			</article>
		</FadeInSection>
	);
};

export default SectionTitle;
