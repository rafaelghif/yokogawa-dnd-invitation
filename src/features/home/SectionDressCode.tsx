import FadeInSection from "@/components/FadeInSection";
import OutfitCarousel from "./OutfitCarousel";

const SectionDressCode: React.FC = () => {
	return (
		<FadeInSection>
			<article className="flex flex-col p-5 bg-gray-100 lg:flex-row-reverse">
				<div>
					<h1
						className="text-xl font-semibold tracking-tight text-center uppercase"
						data-aos="fadeInUp">
						DRESS CODE
					</h1>
					<div
						className="p-3 tracking-wide text-justify text-slate-600 indent-4"
						data-aos="fadeInUp">
						Tema untuk D&D tahun ini adalah Back to School. Dengan
						tema ini akan membawa kita bernostalgia ke jaman sekolah
						dahulu dan keceriaan serta kehangatan satu sama lain.
						Sehingga Dress code yang disarankan adalah :
						<ul className="text-left list-disc list-inside">
							<li>
								Seragam SD (Indonesia/Japan/Korean/atau negara
								lain)
							</li>
							<li>
								Seragam SMP (Indonesia/Japan/Korean/atau negara
								lain)
							</li>
							<li>
								Seragam SMA (Indonesia/Japan/Korean/atau negara
								lain)
							</li>
							<li>Seragam Guru (Batik/Seragam formal guru)</li>
							<li>Seragam Kepala Sekolah (Batik)</li>
						</ul>
					</div>
					<div className="w-full p-4 mt-2 bg-yellow-100 border border-yellow-500 rounded-lg shadow-md">
						<p className="text-sm font-bold text-red-600">
							Untuk penggunaan seragam sekolah mohon untuk tidak
							menyertakan identitas sekolah. Hanya Simbol-simbol
							tingkatan (Osis dll)
						</p>
					</div>
				</div>
				<div className="w-full lg:w-1/3" data-aos="fadeInUp">
					<OutfitCarousel />
				</div>
			</article>
		</FadeInSection>
	);
};

export default SectionDressCode;
