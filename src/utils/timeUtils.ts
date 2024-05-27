export interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export const calculateTimeLeft = (targetDateTime: string): TimeLeft => {
	const targetDate = new Date(targetDateTime);
	const now = new Date();
	const difference = targetDate.getTime() - now.getTime();

	if (difference > 0) {
		return {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	} else {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}
};

export const isTimeLeftZero = (timeLeft: TimeLeft): boolean => {
	return (
		timeLeft.days === 0 &&
		timeLeft.hours === 0 &&
		timeLeft.minutes === 0 &&
		timeLeft.seconds === 0
	);
};
