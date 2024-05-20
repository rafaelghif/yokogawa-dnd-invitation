"use client";

import { useQRCode } from "next-qrcode";

interface QrCodeProps {
	value: string;
}

const QrCode: React.FC<QrCodeProps> = ({ value }) => {
	const { Canvas } = useQRCode();
	return (
		<div data-aos="fadeInUp">
			<Canvas
				key="canvas"
				text={value}
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
	);
};

export default QrCode;
