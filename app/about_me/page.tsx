"use client";
import { Navigation } from "../components/nav";
import Image from "next/image";
import Particles from "../components/particles";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [showGallery, setShowGallery] = useState(false);

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
          <h1 className="text-4xl font-bold text-yellow-400">Hi, I'm Shinhaeng Lee! 👋</h1>
          <p className="mt-20 text-lg text-zinc-300 mt-4">
            I'm a student majoring in **Computer Science** at **Georgia Tech**.  
            I am pursuing the **BS/MS Program** and will complete my:
          </p>
          <ul className="mt-4 text-lg text-zinc-400 space-y-2">
            <li>🎓 **B.S.:** Fall 2025</li>
            <li>🎓 **M.S.:** Fall 2026</li>
          </ul>

          <p className="mt-12 text-lg text-zinc-300 mt-6">
            My passion lies in **training large AI models** and **pushing the boundaries of AI research**.  
            I love experimenting with **transformers, diffusion models, and neural architectures** to enhance **deep learning capabilities**.
          </p>

          <p className="mt-12 text-lg text-zinc-300 mt-6">
            When I'm not training models, I'm exploring new AI architectures and **delving deep into research**  
            on cutting-edge advancements in **machine learning and artificial intelligence**.
          </p>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="mt-16 w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-zinc-300 mb-6">📸 Some Moments</h2>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-5xl transition-opacity duration-1000 ${
            showGallery ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Replace these image paths with your actual images */}
          {["/un1.jpeg", "/rome.jpg", "/un2.jpeg"].map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            >
              <Image src={src} alt={`Me ${index + 1}`} width={400} height={300} className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
