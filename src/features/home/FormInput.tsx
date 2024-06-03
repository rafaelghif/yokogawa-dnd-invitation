"use client";

import { useState } from "react";
import { saveAs } from "file-saver";
import { getUserByBadgeId } from "@/services/user";
import useToast from "@/hooks/useToast";
import { delay } from "@/helpers/form";
import { Circles } from "react-loading-icons";
import QrCode from "@/components/QrCode";
import LoadingCircle from "@/components/LoadingCircle";
import { UserInterface } from "@/types/user";

export default function FormInput() {
	const [badgeId, setBadgeId] = useState<string>("");
	const [user, setUser] = useState<UserInterface>();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { errorToast } = useToast();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setUser(undefined);

		await delay(1000);

		try {
			const userData = await getUserByBadgeId(badgeId);
			if (userData) {
				setUser(userData);
			} else {
				errorToast("BadgeId not found, please contact administrator!");
			}
		} catch (err) {
			console.log("error", err);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleDownload = () => {
		const canvas = document.querySelector(
			"canvas",
		) as HTMLCanvasElement | null;

		if (canvas) {
			canvas.toBlob((blob) => {
				if (blob) {
					saveAs(blob, `yokogawa-dnd-invitation-${badgeId}.png`);
				}
			});
		}
	};

	return (
		<div className="flex flex-col items-center w-full gap-3">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col w-11/12 gap-3"
				autoComplete="false">
				<div className="flex items-center justify-center w-full mb-2">
					{user && <QrCode value={user} />}
					{isSubmitting && <LoadingCircle />}
				</div>
				<div className="flex justify-center w-full">
					<input
						type="text"
						name="badgeId"
						id="badgeId"
						value={badgeId}
						onInput={(e) => setBadgeId(e.currentTarget.value)}
						className="form-input lg:w-[48%]"
						required={true}
						placeholder="Badge Id"
						onClick={() => setBadgeId("")}
					/>
				</div>
				<div className="flex justify-center space-x-2">
					<button
						type="submit"
						className="btn btn-primary"
						disabled={isSubmitting}>
						{!isSubmitting ? (
							<span>Submit</span>
						) : (
							<span className="flex flex-row items-center space-x-2">
								<Circles className="w-5 h-5" />
								<span>Loading...</span>
							</span>
						)}
					</button>
					{user && (
						<button
							id="downloadBtn"
							type="button"
							className="text-white bg-green-500 btn hover:bg-green-600"
							onClick={handleDownload}>
							Download
						</button>
					)}
				</div>
			</form>
		</div>
	);
}
