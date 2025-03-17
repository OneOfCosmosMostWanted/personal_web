"use client";
import { ArrowLeft, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	// Handle screen resize
	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 768); // Adjust size if needed
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="container flex items-center justify-between p-6 mx-auto">
					
					{/* Left Side - Back Button */}
					<Link href="/" className="duration-200 text-zinc-300 hover:text-zinc-100">
						<ArrowLeft className="w-6 h-6" />
					</Link>

					{/* Desktop Navigation - Show only when screen is large */}
					{!isSmallScreen && (
						<div className="flex gap-8">
							<Link href="/about_me" className="duration-200 text-zinc-400 hover:text-zinc-100">About Me</Link>
							<Link href="/experience" className="duration-200 text-zinc-400 hover:text-zinc-100">Experience</Link>
							<Link href="/projects" className="duration-200 text-zinc-400 hover:text-zinc-100">Projects</Link>
							<Link href="/resume" className="duration-200 text-zinc-400 hover:text-zinc-100">Résumé</Link>
							<Link href="/contact" className="duration-200 text-zinc-400 hover:text-zinc-100">Contact</Link>
						</div>
					)}

					{/* Mobile Navigation - Show menu button only on small screens */}
					{isSmallScreen && (
						<button
							className="text-zinc-300 hover:text-zinc-100"
							onClick={() => setMenuOpen(!isMenuOpen)}
						>
							<Menu className="w-6 h-6" />
						</button>
					)}
				</div>

				{/* Mobile Dropdown Menu - Only visible when menu is open */}
				{isSmallScreen && isMenuOpen && (
					<div className="absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 shadow-lg">
						<ul className="flex flex-col items-center gap-4 py-4">
							<li><Link href="/about_me" className="duration-200 text-zinc-400 hover:text-zinc-100" onClick={() => setMenuOpen(false)}>About Me</Link></li>
							<li><Link href="/experience" className="duration-200 text-zinc-400 hover:text-zinc-100" onClick={() => setMenuOpen(false)}>Experience</Link></li>
							<li><Link href="/projects" className="duration-200 text-zinc-400 hover:text-zinc-100" onClick={() => setMenuOpen(false)}>Projects</Link></li>
							<li><Link href="/resume" className="duration-200 text-zinc-400 hover:text-zinc-100" onClick={() => setMenuOpen(false)}>Résumé</Link></li>
							<li><Link href="/contact" className="duration-200 text-zinc-400 hover:text-zinc-100" onClick={() => setMenuOpen(false)}>Contact</Link></li>
						</ul>
					</div>
				)}
			</div>
		</header>
	);
};
