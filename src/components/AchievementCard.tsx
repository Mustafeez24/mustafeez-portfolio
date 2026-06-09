"use client";

import { motion } from "framer-motion";
import { FiAward, FiCheckCircle } from "react-icons/fi";
import { Badge } from "./Badge";
import { Reveal } from "./Reveal";
import type { Achievement } from "@/data/portfolio";

export function AchievementCard({
  achievement,
  delay = 0,
}: {
  achievement: Achievement;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <motion.article whileHover={{ y: -6 }} className="surface-card h-full p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-xl text-blue-400">
              <FiAward />
            </span>
            <div>
              <h3 className="text-2xl font-semibold text-[var(--text-strong)]">
                {achievement.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {achievement.organization}
              </p>
            </div>
          </div>
          <Badge>{achievement.badge}</Badge>
        </div>
        <ul className="mt-6 space-y-3">
          {achievement.points.map((point) => (
            <li key={point} className="flex items-start gap-3 leading-7 text-[var(--muted)]">
              <FiCheckCircle className="mt-1.5 shrink-0 text-blue-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    </Reveal>
  );
}
