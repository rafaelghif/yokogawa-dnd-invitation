import { doc, getDoc } from "firebase/firestore";
import db from "../libs/firebase/database";
import { UserInterface } from "@/types/user";

export const getUserByBadgeId = async (
	badgeId: string,
): Promise<UserInterface> => {
	const docRef = doc(db, "users", badgeId);
	const userDoc = await getDoc(docRef);

	const user = userDoc.data() as UserInterface;

	return user;
};
