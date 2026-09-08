import React from "react";

interface Props {
  index: number;
  title: string;
  detail: string;
  tech: string[];
  GithubLink: string;
  Link: string;
}

const ProjectCards = ({
  index,
  title,
  detail,
  tech,
  GithubLink = "",
  Link = "",
}: Props) => {
  return (
    <div className="flex h-full flex-col">
      <span className="font-display text-sm text-muted">
        {index.toString().padStart(2, "0")}
      </span>
      <h3 className="mt-2 border-b border-rule pb-3 font-display text-xl font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink2">{detail}</p>
      <p className="mt-4 font-mono text-xs text-muted">{tech.join(" · ")}</p>
      <div className="mt-auto flex items-center gap-4 pt-6">
        {Link !== "" && (
          <a
            href={Link}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-ink underline decoration-rule2 decoration-1 underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            View live
          </a>
        )}
        {GithubLink !== "" && (
          <a
            href={GithubLink}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-ink underline decoration-rule2 decoration-1 underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCards;
