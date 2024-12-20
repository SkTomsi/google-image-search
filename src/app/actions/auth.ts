"use server";
import { signIn, signOut } from "@/lib/auth";

export const signInServerFn = async () => {
	await signIn("google", {});
};

export const signOutServerFn = async () => {
	await signOut({});
};
