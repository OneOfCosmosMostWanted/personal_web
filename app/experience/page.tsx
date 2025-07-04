"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
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
  {
    company: "Saker Lab (Emory University)",
    role: "Undergraduate Research Assistant",
    date: "Summer 2025 - Present",
    description: [
      "Architected a modular NLP framework (regex + lexicons + medication-tuned PLMs + LLMs) to extract and classify polysubstance‐use from Reddit.",
      "Modeled multi-order Markov chains to quantify month-to-month transition probabilities between substances.",
      "Leveraged Apriori and PrefixSpan to mine frequent and sequential substance use patterns while preserving co-occurrence and temporal order",
      "Synthesized individual timelines into interactive trajectory visualizations, revealing temporal patterns of common substance use.",
    ],
    image: "/emory.png",
  },
];

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
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-zinc-400">
            These are some of my professional and research experiences.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <Image src={exp.image} alt={exp.company} width={60} height={60} className="rounded-full" />
                  <div>
                    <h2 className="text-xl font-semibold text-white">{exp.company}</h2>
                    <h3 className="text-lg text-zinc-400">{exp.role}</h3>
                    <p className="text-sm text-zinc-500">{exp.date}</p>
                  </div>
                </div>
                <ul className="mt-4 text-zinc-300 space-y-2">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-green-400">✔</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skills, Tools, and Technologies
          </h2>
          <p className="mt-4 text-zinc-400">
            These are some tools and technologies that I have experience with in various capacities.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
          {skills.map((skill, index) => (
            <Card key={index}>
              <div className="p-6 flex flex-col items-center">
                <Image src={skill.image} alt={skill.name} width={60} height={60} />
                <span className="mt-3 text-white">{skill.name}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
