import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";

interface Star {
	id: number;
	x: number;
	y: number;
	scale: number;
	duration: number;
}

export const GlowingStars = memo(function Stars() {
	const [stars, setStars] = useState<Star[]>([]);

	useEffect(() => {
		// Generate stars only on the client side
		const generatedStars = Array.from({ length: 50 }, (_, i) => ({
			id: i,
			x: Math.random() * 100,
			y: Math.random() * 100,
			scale: Math.random() * 0.5 + 0.5,
			duration: Math.random() * 2 + 1,
		}));
		setStars(generatedStars);
	}, []);

	// Return empty container if no stars (during SSR)
	if (stars.length === 0) {
		return <div className="relative h-96 w-full bg-transparent" />;
	}

	return (
		<motion.div
			className="relative h-96 w-full overflow-hidden bg-transparent"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			{stars.map((star) => (
				<motion.div
					key={star.id}
					className="absolute h-2 w-2"
					style={{
						left: `${star.x}%`,
						top: `${star.y}%`,
					}}
					initial={{ scale: 0, opacity: 0 }}
					animate={{
						scale: [star.scale, star.scale * 1, star.scale],
						opacity: [0, 0.8, 0],
					}}
					transition={{
						duration: star.duration,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeOut",
					}}
				>
					<div className="relative">
						{/* Main star */}
						<div className="absolute h-2 w-2 rounded-full bg-white" />

						{/* Glow effect */}
						<div className="-left-1 -top-1 absolute h-4 w-4">
							<div className="absolute h-full w-full rounded-full bg-white opacity-30 blur-sm" />
							<div className="absolute h-full w-full rounded-full bg-white opacity-20 blur-md" />
							<div className="-left-1 -top-1 absolute h-6 w-6 rounded-full bg-white opacity-10 blur-lg" />
						</div>
					</div>
				</motion.div>
			))}
		</motion.div>
	);
});
