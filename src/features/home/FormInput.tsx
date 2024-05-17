"use client";

import { useState } from "react";
import { saveAs } from "file-saver";
import { getUserByBadgeId } from "@/sevices/user";
import useToast from "@/hooks/useToast";
import { delay } from "@/helpers/form";
import { Circles } from "react-loading-icons";
import QrCode from "@/components/QrCode";
import LoadingCircle from "@/components/LoadingCircle";
import FadeInDiv from "@/components/FadeInDiv";

export default function FormInput() {
	const [badgeId, setBadgeId] = useState<string>("");
	const [submittedValue, setSubmittedValue] = useState<string>("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { errorToast } = useToast();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmittedValue("");
		await delay(1000);
		try {
			const user = await getUserByBadgeId(badgeId);
			if (user) {
				setSubmittedValue(user.uniqueId);
			} else {
				errorToast("BadgeId not found, please contact administrator!");
				setSubmittedValue("");
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
		<FadeInDiv className="flex flex-col w-11/12 gap-3 p-5 rounded shadow">
			<div>
				<p className="text-lg font-semibold text-center uppercase">
					Received Form
				</p>
			</div>
			<div className="flex items-center justify-center">
				{submittedValue && <QrCode value={submittedValue} />}
				{isSubmitting && <LoadingCircle />}
			</div>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col w-full gap-3">
				<div className="w-full">
					<input
						type="text"
						name="badgeId"
						id="badgeId"
						value={badgeId}
						onInput={(e) => setBadgeId(e.currentTarget.value)}
						className="form-input"
						required={true}
						placeholder="Badge Id"
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
					{submittedValue && (
						<button
							type="button"
							className="btn"
							onClick={handleDownload}>
							Download
						</button>
					)}
				</div>
			</form>
		</FadeInDiv>
	);
}
