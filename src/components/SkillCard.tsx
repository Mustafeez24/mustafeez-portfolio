"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import type { SkillGroup } from "@/data/portfolio";

export function SkillCard({
  group,
  delay = 0,
}: {
  group: SkillGroup;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <motion.article
        whileHover={{ y: -6 }}
        className={`surface-card h-full p-6 ${
          group.highlight ? "border-blue-500/45 shadow-blue-500/10" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-[var(--text-strong)]">
            {group.title}
          </h3>
          {group.highlight && (
            <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
              Focus
            </span>
          )}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className={`pill ${
                skill === "Java"
                  ? "border-blue-400/45 bg-blue-500/10 text-blue-400"
                  : ""
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.article>
    </Reveal>
  );
}
