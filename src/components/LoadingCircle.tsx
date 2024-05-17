import { Circles } from "react-loading-icons";
import FadeInDiv from "./FadeInDiv";

const LoadingCircle: React.FC = () => {
	return (
		<FadeInDiv duration={0.3}>
			<Circles
				stroke="#000000"
				strokeOpacity={0.3}
				className="h-44 w-44"
			/>
		</FadeInDiv>
	);
};

export default LoadingCircle;
