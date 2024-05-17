"use client";

import toast from "react-hot-toast";

const useToast = () => {
	const errorToast = (strMessage: string) => {
		toast.error(strMessage, { position: "bottom-center" });
	};
	return {
		errorToast,
	};
};

export default useToast;