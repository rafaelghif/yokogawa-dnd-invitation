import CountdownTimer from "@/components/CountdownTimer";
import FormInput from "./FormInput";

const SectionReceived: React.FC = () => {
	return (
		<div
			data-aos="fadeInUp"
			id="invitation"
			className="flex flex-col items-center justify-center w-full gap-5 p-6 sm:p-10 lg:p-16">
			<h1 className="text-lg font-semibold tracking-tight text-center text-gray-800 uppercase sm:text-xl lg:text-2xl">
				Received Form
			</h1>
			<div className="w-full lg:w-[47%]" data-aos="fadeInUp">
				<CountdownTimer targetDateTime="2024-07-05 15:45:00" />
			</div>
			<div className="w-full" data-aos="fadeInUp">
				<FormInput />
			</div>
		</div>
	);
};

export default SectionReceived;
