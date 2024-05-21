"use client";

import { UserInterface } from "@/types/user";
import { useQRCode } from "next-qrcode";

interface QrCodeProps {
	value: UserInterface;
}

const QrCode: React.FC<QrCodeProps> = ({ value }) => {
	const { Canvas } = useQRCode();
	return (
		<div
			data-aos="fadeInUp"
			className="flex flex-col justify-center items-center">
			<div>
				<Canvas
					key="canvas"
					text={value.uniqueId}
					logo={{
						src: "/assets/images/yokogawa-logo.png",
						options: { width: 30, x: 76, y: 76 },
					}}
					options={{
						errorCorrectionLevel: "H",
						width: 176,
						margin: 2,
						quality: 1,
					}}
				/>
			</div>
			<div>
				{value.badgeId} - {value.name} - {value.department} -{" "}
				{value.busNumber}
			</div>
		</div>
	);
};

export default QrCode;
