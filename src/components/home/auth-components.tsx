"use client";

import { signInServerFn, signOutServerFn } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";

export function SignIn() {
	const { mutate: signInHandler } = useMutation({
		mutationFn: async () => await signInServerFn(),
	});

	return (
		<Button
			className="rounded-full bg-[#c2e7ff]"
			onClick={() => signInHandler()}
		>
			Sign In
		</Button>
	);
}

export function SignOut() {
	return <Button onClick={() => signOutServerFn()}>Sign Out</Button>;
}
