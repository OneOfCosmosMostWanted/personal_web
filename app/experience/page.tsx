"use client";
import { Navigation } from "../components/nav";
import Image from "next/image";

const experiences = [
  {
    company: "UN Peacekeeper - United Nations Interim Force in Lebanon (UNIFIL)",
    role: "Signal Company, Republic of Korea Battalion",
    date: "June 2023 - January 2024",
    description: [
      "Maintained, repaired, and constructed websites and servers for internal communication.",
      "Managed computer devices as part of the Signal Company, Republic of Korea Battalion.",
      "Engaged in civilian operations and peacekeeping initiatives to support the local community.",
      "Worked with multinational forces to enhance regional stability and security.",
    ],
    image: "/unifil.png", 
  },
  {
    company: "VIP Research Team - Georgia Institute of Technology (GT)",
    role: "Undergraduate Researcher",
    date: "Spring 2025 - Present",
    description: [
      "Conducting research at **Georgia Tech** VIP (Vertically Integrated Projects) program in AI-driven Augmented and Alternative Communication (AAC).",
      "Developing an iOS application to assist individuals with speech impairments using AI-powered text-to-speech synthesis.",
      "Exploring the effectiveness of **Visual Scene Display (VSD)** for post-stroke aphasia patients to improve language rehabilitation.",
      "Collaborating with faculty and fellow researchers at **Georgia Tech** to enhance accessibility solutions in communication technologies.",
    ],
    image: "/gt.png", 
  },
];

// Skill Icons Using URL (No Need to Store Locally)
const skills = [
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export default function ExperiencePage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 py-16">
        
        {/* Experience Section */}
        <h1 className="my-4 text-4xl font-bold text-white text-center mb-12">💼 Experience</h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-lg bg-zinc-800 shadow-lg flex flex-col md:flex-row items-center md:items-start">
              {/* Experience Details */}
              <div className="md:w-3/5">
                <h2 className="text-2xl font-semibold text-white">{exp.company}</h2>
                <h3 className="text-lg text-zinc-400">{exp.role}</h3>
                <p className="text-sm text-zinc-500">{exp.date}</p>
                <ul className="mt-4 text-zinc-300 space-y-2">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-green-400">✔</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience Image */}
              <div className="md:w-2/5 mt-6 md:mt-0 md:ml-6 self-end flex justify-end">
                <Image 
                  src={exp.image} 
                  alt={exp.company} 
                  width={300} 
                  height={200} 
                  className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-blue-400">Skills, Tools, and Technologies</h2>
          <p className="text-zinc-400 mt-4">
            These are some tools and technologies that I have experience with in various capacities,
            whether professional, academic, or personal.
          </p>
        </div>

        {/* Centered Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
            {skills.map((skill, index) => (
              <div key={index} className="bg-zinc-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                <Image src={skill.image} alt={skill.name} width={60} height={60} />
                <span className="mt-3 text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
