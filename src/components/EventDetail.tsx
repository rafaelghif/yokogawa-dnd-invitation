interface EventDetailProps {
	seat: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ seat }) => {
	return (
		<div className="w-full p-6 text-center rounded-lg shadow-md bg-gray-50 sm:p-8 lg:p-10">
			<div className="text-gray-600 sm:text-xl lg:text-2xl">
				<div className="font-semibold">Location:</div>
				<div>Hotel Harmony One</div>
			</div>
			<div className="text-gray-600 sm:text-xl lg:text-2xl">
				<div className="font-semibold">Seat:</div>
				<div>{seat}</div>
			</div>
			<div className="text-gray-600 sm:text-xl lg:text-2xl">
				<div className="font-semibold">Date:</div>
				<div>05, July 2024</div>
			</div>
			<div className="text-gray-600 sm:text-xl lg:text-2xl">
				<div className="font-semibold">Time:</div>
				<div>17:00 - Finish</div>
			</div>
		</div>
	);
};

export default EventDetail;
