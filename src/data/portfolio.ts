export type SkillGroup = {
  title: string;
  skills: string[];
  highlight?: boolean;
};

export type Project = {
  title: string;
  status: "Completed" | "Currently Building" | "Planned";
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Learning", href: "#learning" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = [
  "Java Developer",
  "Google Campus Ambassador (2x)",
  "HackerRank Crew Member",
];

export const achievements = [
  {
    title: "Google Campus Ambassador",
    organization: "Google",
    badge: "2x Selected",
    points: [
      "Selected as a Google Campus Ambassador for two consecutive terms.",
      "Promoted developer programs, learning opportunities, and community engagement.",
      "Developed leadership, communication, and community-building skills.",
    ],
  },
  {
    title: "HackerRank Crew Member",
    organization: "HackerRank",
    badge: "Crew Member",
    points: [
      "Selected as a HackerRank Crew Member.",
      "Promoting coding culture and problem-solving among students.",
      "Participating in technical and community initiatives.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "Python"],
    highlight: true,
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    title: "Core Concepts",
    skills: ["OOP", "DSA", "REST APIs", "Authentication", "Database Design"],
  },
];

export const learningItems = [
  { title: "Data Structures & Algorithms in Java", progress: 72 },
  { title: "Backend Development", progress: 64 },
  { title: "Database Design", progress: 58 },
  { title: "REST API Development", progress: 66 },
  { title: "System Design Fundamentals", progress: 38 },
  { title: "Software Engineering Principles", progress: 54 },
];

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    status: "Completed",
    description:
      "A modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Mustafeez24",
    demoUrl: "https://mustafeez-portfolio.vercel.app",
  },
  {
    title: "AI Career Copilot",
    status: "Currently Building",
    description:
      "An AI-powered platform that helps users discover jobs, tailor resumes, and manage applications.",
    technologies: ["Next.js", "Node.js", "APIs", "MongoDB"],
  },
  {
    title: "Real-Time Chat Application",
    status: "Currently Building",
    description:
      "A real-time communication platform built using modern web technologies.",
    technologies: ["React", "Node.js", "Express.js", "WebSockets"],
  },
  {
    title: "E-Commerce Backend",
    status: "Planned",
    description:
      "A scalable backend application with authentication, products, carts, and order management.",
    technologies: ["Java", "REST APIs", "PostgreSQL", "Authentication"],
  },
];

export const stats = [
  { label: "Public Profile", value: "Active" },
  { label: "Primary Focus", value: "Java" },
  { label: "Google Ambassador", value: "2x" },
  { label: "Portfolio", value: "2026" },
];

export const goals = [
  "Become a Software Engineer",
  "Strengthen Java and DSA skills",
  "Build impactful software projects",
  "Gain real-world development experience",
  "Contribute to meaningful products",
];