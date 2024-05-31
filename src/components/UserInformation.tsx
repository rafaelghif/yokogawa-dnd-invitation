interface UserInformationProps {
	badgeId: string;
	name: string;
	department: string;
	seat: string;
	busNumber: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
	badgeId,
	name,
	department,
	seat,
	busNumber,
}) => {
	return (
		<div className="w-full p-4 text-center rounded-lg shadow-md bg-gray-50 sm:p-6 lg:p-8">
			<div className="mb-4">
				<div className="text-2xl font-bold text-blue-600 sm:text-3xl lg:text-3xl">
					{badgeId}
				</div>
				<div className="text-lg font-semibold text-gray-800 sm:text-2xl lg:text-xl">
					{name}
				</div>
			</div>
			<div className="mb-2 text-gray-600 sm:text-lg lg:text-xl">
				<div className="font-semibold">Department:</div>
				<div>{department}</div>
			</div>
			<div className="mb-2 text-gray-600 sm:text-lg lg:text-xl">
				<div className="font-semibold">Seat:</div>
				<div>{seat}</div>
			</div>
			<div className="text-sm text-gray-500 sm:text-md lg:text-lg">
				<div className="font-semibold">Bus Number:</div>
				<div>{busNumber}</div>
			</div>
		</div>
	);
};

export default UserInformation;
