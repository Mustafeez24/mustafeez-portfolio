import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          {eyebrow}
        </p>
        <h2 className="text-balance text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{description}</p>
      </div>
    </Reveal>
  );
}
