"use client";
import { Navigation } from "../components/nav";
import Image from "next/image";
import Particles from "../components/particles";
import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";
import un1 from "@/public/un1.jpeg";
import rome from "@/public/rome.jpg";
import un2 from "@/public/un2.jpeg";
import gt_einstein from "@/public/gt_einstein.jpg";

export default function AboutMe() {
	const [showGallery, setShowGallery] = useState(false);
	const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
		null,
	);
	const images = [un1, rome, un2, gt_einstein];

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 400) {
				setShowGallery(true);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="relative bg-gradient-to-tl from-black via-zinc-600/20 to-black min-h-screen flex flex-col items-center justify-center">
			<Navigation />
			<Particles className="absolute inset-0 -z-10" quantity={100} />
			{selectedImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
					onClick={() => setSelectedImage(null)}
				>
					<div onClick={(e) => e.stopPropagation()} className="p-4">
						<Image
							src={selectedImage}
							alt="Selected"
							className="max-h-[90vh] w-auto rounded-lg"
						/>
					</div>
				</div>
			)}

			{/* Centered Content */}
			<div className="container mx-auto px-6 py-16 flex flex-col items-center text-center mt-16">
				{/* Profile Picture */}
				<div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg">
					<Image
						src="/profile.jpg"
						alt="Shinhaeng Lee"
						layout="fill"
						objectFit="cover"
					/>
				</div>

				{/* About Me Text */}
				<div className="mt-8 text-white max-w-2xl">
					<h1 className="text-4xl font-bold text-yellow-400">
						Hi, I'm Shinhaeng Lee! 👋
					</h1>
					<p className="mt-20 text-lg text-zinc-300 mt-4">
						I'm a student majoring in **Computer Science** at Georgia Tech. I am
						pursuing the BS/MS Program and will complete my:
					</p>
					<ul className="mt-4 text-lg text-zinc-400 space-y-2">
						<li>🎓 B.S.: Fall 2025</li>
						<li>🎓 M.S.: Fall 2026</li>
					</ul>

					<p className="mt-12 text-lg text-zinc-300 mt-6">
						My passion lies in training large AI models and pushing the
						boundaries of AI research. I love experimenting with transformers,
						diffusion models, and neural architectures to enhance deep learning
						capabilities.
					</p>

					<p className="mt-12 text-lg text-zinc-300 mt-6">
						When I'm not training models, I'm exploring new AI architectures and
						delving deep into research on cutting-edge advancements in machine
						learning and artificial intelligence.
					</p>
				</div>
			</div>

			{/* Image Gallery Section */}
			<div className="mt-16 w-full flex flex-col items-center">
				<h2 className="text-3xl font-bold text-zinc-300 mb-6">
					📸 Some Moments
				</h2>

				<div
					className={`columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 p-6 max-w-5xl transition-opacity duration-1000 ${
						showGallery
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					}`}
				>
					{images.map((img, index) => (
						<div
							key={index}
							className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 cursor-pointer"
							onClick={() => setSelectedImage(img)}
						>
							<Image
								src={img}
								alt={`Me ${index + 1}`}
								className="w-full h-auto rounded-lg"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
