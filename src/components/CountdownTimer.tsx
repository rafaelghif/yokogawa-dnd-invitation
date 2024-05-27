"use client";

import { useState, useEffect, useCallback } from "react";
import {
	calculateTimeLeft,
	isTimeLeftZero,
	TimeLeft,
} from "../utils/timeUtils";
import CountDownFinish from "./CountdownFinish";
import TimeUnit from "./TimeUnit";

interface CountdownTimerProps {
	targetDateTime: string;
	EndComponent?: React.ComponentType;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
	targetDateTime,
	EndComponent,
}) => {
	const [timeLeft, setTimeLeft] = useState<TimeLeft>(
		calculateTimeLeft(targetDateTime),
	);
	const [prevTimeLeft, setPrevTimeLeft] = useState<TimeLeft>(timeLeft);
	const [isTimerEnded, setIsTimerEnded] = useState<boolean>(false);
	const [isClient, setIsClient] = useState<boolean>(false);

	const updateTimer = useCallback(() => {
		const newTimeLeft = calculateTimeLeft(targetDateTime);
		setPrevTimeLeft(timeLeft);
		setTimeLeft(newTimeLeft);
		if (isTimeLeftZero(newTimeLeft)) {
			setIsTimerEnded(true);
		}
	}, [targetDateTime, timeLeft]);

	useEffect(() => {
		setIsClient(true);
		const interval = setInterval(updateTimer, 1000);
		return () => clearInterval(interval);
	}, [updateTimer]);

	useEffect(() => {
		(
			["days", "hours", "minutes", "seconds"] as Array<keyof TimeLeft>
		).forEach((unit) => {
			if (timeLeft[unit] !== prevTimeLeft[unit]) {
				setTimeout(() => {
					const element = document.getElementById(unit);
					if (element) {
						element.classList.remove("animate-fadeInOut");
						void element.offsetWidth; // Trigger reflow
						element.classList.add("animate-fadeInOut");
					}
				}, 0);
			}
		});
	}, [timeLeft, prevTimeLeft]);

	if (!isClient) {
		return null;
	}

	return (
		<div>
			{isTimerEnded ? (
				EndComponent ? (
					<EndComponent />
				) : (
					<CountDownFinish />
				)
			) : (
				<div className="flex items-center justify-center p-4 text-gray-800 bg-gray-100 rounded-lg shadow-2xl">
					<div className="grid w-full max-w-4xl grid-cols-4 gap-4">
						<TimeUnit
							id="days"
							value={timeLeft.days}
							label="Days"
							bgColor="bg-blue-500"
						/>
						<TimeUnit
							id="hours"
							value={timeLeft.hours}
							label="Hours"
							bgColor="bg-green-500"
						/>
						<TimeUnit
							id="minutes"
							value={timeLeft.minutes}
							label="Minutes"
							bgColor="bg-yellow-500"
						/>
						<TimeUnit
							id="seconds"
							value={timeLeft.seconds}
							label="Seconds"
							bgColor="bg-red-500"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default CountdownTimer;
