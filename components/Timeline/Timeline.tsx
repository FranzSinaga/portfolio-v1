import React from "react";
import { TIMELINE_DATA } from "./data";
import BlurFade from "../ui/blur-fade";

const Timeline = () => {
  return (
    <ol className="mx-auto flex max-w-3xl flex-col">
      {TIMELINE_DATA.map((entry, index) => (
        <li
          key={entry.id}
          className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-rule py-8 first:border-t-0 md:grid-cols-[5rem_1fr] md:gap-8"
        >
          <BlurFade inView delay={0.1 + index * 0.05}>
            <span className="font-mono text-sm text-muted">
              {(index + 1).toString().padStart(2, "0")}.0
            </span>
          </BlurFade>
          <BlurFade inView delay={0.15 + index * 0.05}>
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">
                {entry.name}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-muted">
                {entry.role} · {entry.periode}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {entry.responsibility.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-ink2"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
