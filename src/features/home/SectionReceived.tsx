import FormInput from "./FormInput";

const SectionReceived: React.FC = () => {
	return (
		<div
			data-aos="fadeInUp"
			id="invitation"
			className="flex flex-col items-center justify-center w-full gap-5 p-10 bg-gray-100">
			<h1 className="text-xl font-semibold tracking-tight text-center uppercase">
				Received Form
			</h1>
			<FormInput />
		</div>
	);
};

export default SectionReceived;
