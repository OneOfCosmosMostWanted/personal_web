"use client";
import { Navigation } from "../components/nav";

export default function ResumePage() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
			<Navigation />
			<div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
			<h1 className="text-3xl font-semibold text-white mt-12 mb-6">📄 My Résumé</h1>
				<div className="w-full max-w-4xl h-[80vh] border border-gray-300 shadow-lg bg-white rounded-lg">
					<iframe
						src="/resume.pdf"
						className="w-full h-full"
						title="Resume PDF"
					></iframe>
				</div>
			</div>
		</div>
	);
}
