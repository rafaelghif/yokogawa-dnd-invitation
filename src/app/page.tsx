import SectionDressCode from "@/features/home/SectionDressCode";
import SectionReceived from "@/features/home/SectionReceived";
import SectionTheme from "@/features/home/SectionTheme";
import SectionTitle from "@/features/home/SectionTitle";

export default function Home() {
	return (
		<>
			<SectionTitle />
			<SectionTheme />
			<SectionDressCode />
			<SectionReceived />
		</>
	);
}
