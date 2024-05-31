"use client";

import { UserInterface } from "@/types/user";
import { useQRCode } from "next-qrcode";
import UserInformation from "./UserInformation";
import EventDetail from "./EventDetail";

interface QrCodeProps {
	value: UserInterface;
}

const QrCode: React.FC<QrCodeProps> = ({ value }) => {
	const { uniqueId, badgeId, name, department, seat, busNumber } = value;
	const { Canvas } = useQRCode();
	return (
		<div
			data-aos="fadeInUp"
			className="flex flex-col items-center justify-center gap-3 w-full p-6 transition-transform transform bg-white border border-gray-200 rounded-lg shadow-lg sm:w-11/12 lg:w-[47%] hover:scale-105">
			<div className="w-full p-4 text-justify bg-yellow-100 border border-yellow-500 rounded-lg shadow-md">
				<p className="text-sm font-bold text-red-600 sm:text-md lg:text-lg">
					Ini adalah undangan yang akan berguna untuk tanda
					kehadiran/absensi, tebus souvenir pada saat kedatangan,
					nomor undian doorprize. Sehingga pada kolom dibawah ini
					untuk memasukkan nomor badge/karyawan untuk membuat barcode.
					Barcode tersebut mohon di{" "}
					<a href="#downloadBtn" className="text-red-800 underline">
						Download
					</a>{" "}
					atau disimpan dan gunakan pada saat registrasi di Hotel.
				</p>
			</div>
			<div className="flex justify-center w-full">
				<Canvas
					key="canvas"
					text={uniqueId}
					logo={{
						src: "/assets/images/yokogawa-logo.png",
						options: { width: 35, x: 115, y: 115 },
					}}
					options={{
						errorCorrectionLevel: "H",
						width: 260,
						margin: 2,
						quality: 1,
					}}
				/>
			</div>
			<UserInformation
				badgeId={badgeId}
				name={name}
				department={department}
				seat={seat}
				busNumber={busNumber}
			/>
			<EventDetail />
		</div>
	);
};

export default QrCode;
