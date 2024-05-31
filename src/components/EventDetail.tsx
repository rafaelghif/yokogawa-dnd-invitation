const EventDetail: React.FC = () => {
	return (
		<div className="w-full p-6 text-center rounded-lg shadow-md bg-gray-50 sm:p-8 lg:p-10">
			<div className="text-gray-600 sm:text-xl lg:text-2xl">
				<div className="font-semibold">Location:</div>
				<div>
					Radisson Golf & Convention Center Batam, Jl Jendral
					Sudirman, Sukajadi 29432 Batam Center
				</div>
			</div>
			<div className="text-gray-600 sm:text-xl lg:text-2xl">
				<div className="font-semibold">Date:</div>
				<div>05, July 2024</div>
			</div>
			<div className="text-gray-600 sm:text-xl lg:text-2xl">
				<div className="font-semibold">Time:</div>
				<div>15:45 - 22:00</div>
			</div>
		</div>
	);
};

export default EventDetail;
