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
						<p className="px-5 text-justify" data-aos="fadeInUp">
							<span className="ml-5 mr-1 font-semibold">
								Apa itu D&D?
							</span>
							D&D adalah kegiatan apresiasi dari Management
							perusahaan untuk semua karyawan terhadap kinerja
							yang berupa kegiatan Makan malam (Dinner) dan pentas
							seni/bakat dari karyawan (Dance). Di dalam kegiatan
							ini ada juga berbagi souvenir untuk semua karyawan
							yang hadir, terdapat juga games yang akan
							mendapatkan hadiah bagi yang beruntung, Lucky draw
							dengan total hadiah lebih dari 50item bagi yang
							beruntung, talent performance dari karyawan
							(silahkan untuk mendaftarkan bakat dan talent
							kalian), band performace, DJ performance, photo
							season, 360 camera, dan banyak lagi keseruan
							lainnya.
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
