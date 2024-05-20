"use client";

import { useState } from "react";
import { saveAs } from "file-saver";
import { getUserByBadgeId } from "@/sevices/user";
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
		<div className="flex flex-col w-11/12 gap-3 p-5 rounded shadow-xl">
			<div>
				<h1 className="font-semibold text-center uppercase tracking-tight">
					Received Form
				</h1>
			</div>
			<div className="flex items-center justify-center">
				{user && <QrCode value={user.uniqueId} />}
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
							type="button"
							className="btn"
							onClick={handleDownload}>
							Download
						</button>
					)}
				</div>
			</form>
		</div>
	);
}
