const TimeUnit: React.FC<{
	id: string;
	value: number;
	label: string;
	bgColor: string;
}> = ({ id, value, label, bgColor }) => (
	<div
		className={`flex flex-col items-center px-2 py-1 md:px-4 md:py-2 ${bgColor} text-white rounded-md shadow-md`}>
		<span
			id={id}
			className="text-lg md:text-xl lg:text-xl animate-fadeInOut">
			{value}
		</span>
		<span className="text-xs font-medium md:text-sm lg:text-base">
			{label}
		</span>
	</div>
);

export default TimeUnit;
