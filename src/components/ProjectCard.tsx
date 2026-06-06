"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";
import type { Project } from "@/data/portfolio";

export function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  const completed = project.status === "Completed";

  return (
    <Reveal delay={delay}>
      <motion.article whileHover={{ y: -6 }} className="surface-card h-full p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-2xl font-semibold text-[var(--text-strong)]">
            {project.title}
          </h3>
          <Badge>{project.status}</Badge>
        </div>
        <p className="mt-5 leading-7 text-[var(--muted)]">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span key={tech} className="pill">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          {completed ? (
            <>
              <a className="btn-secondary" href={project.githubUrl}>
                <FiGithub />
                GitHub
              </a>
              <a className="btn-secondary" href={project.demoUrl}>
                <FiExternalLink />
                Demo
              </a>
            </>
          ) : (
            <span className="inline-flex items-center rounded-md border border-[var(--line)] px-4 py-3 text-sm font-medium text-[var(--muted)]">
              Currently Building
            </span>
          )}
        </div>
      </motion.article>
    </Reveal>
  );
}
