import FadeInDiv from "@/components/FadeInDiv";
import FormInput from "./FormInput";
import FadeInSection from "@/components/FadeInSection";

const ContainerHome: React.FC = () => {
	return (
		<FadeInSection className="flex flex-col items-center justify-center gap-5">
			<FadeInDiv>Yokogawa DnD Event 2024</FadeInDiv>
			<FadeInDiv className="flex justify-center w-full">
				<FormInput />
			</FadeInDiv>
		</FadeInSection>
	);
};

export default ContainerHome;
