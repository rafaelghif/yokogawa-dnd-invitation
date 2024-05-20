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
					src={"/assets/images/yokogawa-logo.png"}
					alt=""
					className="h-auto w-auto"
					height={300}
					width={300}
				/>
			</SwiperSlide>
			<SwiperSlide className="!flex justify-center items-center">
				<Image
					src={"/assets/images/yokogawa-logo.png"}
					alt=""
					className="h-auto w-auto"
					height={300}
					width={300}
				/>
			</SwiperSlide>
			<SwiperSlide className="!flex justify-center items-center">
				<Image
					src={"/assets/images/yokogawa-logo.png"}
					alt=""
					className="h-auto w-auto"
					height={300}
					width={300}
				/>
			</SwiperSlide>
			<SwiperSlide className="!flex justify-center items-center">
				<Image
					src={"/assets/images/yokogawa-logo.png"}
					alt=""
					className="h-auto w-auto"
					height={300}
					width={300}
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default OutfitCarousel;
