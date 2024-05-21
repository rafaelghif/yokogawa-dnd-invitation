import { Circles } from "react-loading-icons";

const LoadingCircle: React.FC = () => {
	return (
		<div data-aos="fadeInUp">
			<Circles
				stroke="#00797c"
				strokeOpacity={0.3}
				className="h-44 w-44"
			/>
		</div>
	);
};

export default LoadingCircle;
