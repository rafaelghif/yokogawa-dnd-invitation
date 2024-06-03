"use client";
import { Scrollbar, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import Image from "next/image";

const OutfitCarousel: React.FC = () => {
	return (
		<Swiper
			modules={[Scrollbar, EffectFade, Autoplay]}
			spaceBetween={50}
			scrollbar={{ draggable: true }}
			effect="fade"
			autoplay={{ delay: 3000, waitForTransition: true }}
			fadeEffect={{ crossFade: true }}
			className="!p-5">
			<SwiperSlide className="!flex justify-center items-center">
				<Image
					src={"/assets/images/elementary-school-uniform.png"}
					alt=""
					className="w-auto h-auto aspect-square"
					height={300}
					width={300}
					loading="lazy"
				/>
			</SwiperSlide>
			<SwiperSlide className="!flex justify-center items-center">
				<Image
					src={"/assets/images/vocation-high-school-uniform.png"}
					alt=""
					className="w-auto h-auto aspect-square"
					height={300}
					width={300}
					loading="lazy"
				/>
			</SwiperSlide>
			<SwiperSlide className="!flex justify-center items-center">
				<Image
					src={"/assets/images/senior-high-school-uniform.png"}
					alt=""
					className="w-auto h-auto aspect-square"
					height={300}
					width={300}
					loading="lazy"
				/>
			</SwiperSlide>
			<SwiperSlide className="!flex justify-center items-center">
				<Image
					src={"/assets/images/teacher-uniform.png"}
					alt=""
					className="w-auto h-auto aspect-square"
					height={300}
					width={300}
					loading="lazy"
				/>
			</SwiperSlide>
			<SwiperSlide className="!flex justify-center items-center">
				<Image
					src={"/assets/images/batik-uniform.png"}
					alt=""
					className="w-auto h-auto aspect-square"
					height={300}
					width={300}
					loading="lazy"
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default OutfitCarousel;
