import type { NextPage } from "next";
import Head from "next/head";
import AnimatedBgHero from "../components/Hero/AnimatedBgHero";
import ProjectCards from "../components/Cards/ProjectCards";
import Timeline from "../components/Timeline/Timeline";

import BlurFade from "../components/ui/blur-fade";

const STACK = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue", "Zustand"];

const PROJECTS = [
  {
    title: "Indonesia Covid Data",
    detail:
      "Build a website to display the number of corona virus cases that occurred in Indonesia",
    tech: ["React JS", "Bootstrap", "Rest API"],
    Link: "https://franzsinaga.github.io/SimpleIndonesiaCoronavirus/",
    GithubLink: "https://github.com/FranzSinaga/SimpleIndonesiaCoronavirus",
  },
  {
    title: "Simple Todo List",
    detail: "Building a simple Todo web app to organize the activities you want to do",
    tech: ["React JS", "Redux", "Tailwind CSS"],
    Link: "https://franzsinaga.github.io/r_todolist/",
    GithubLink: "https://github.com/FranzSinaga/r_todolist",
  },
  {
    title: "Premier League Table",
    detail: "Website to display the current standings for the English league",
    tech: ["HTML", "CSS", "JS", "Workbox", "PWA"],
    Link: "https://fir-hosting-a2698.web.app/",
    GithubLink: "https://github.com/FranzSinaga/pwa-premier-league-table",
  },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/FranzSinaga" },
  { label: "LinkedIn", href: "https://id.linkedin.com/in/franz-sinaga" },
  { label: "Email", href: "mailto:sinagafranz12@gmail.com" },
];

const linkProps = (href: string) =>
  href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer" };

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Franz Sinaga</title>
        <link rel="icon" href="/franz.ico" />

        <meta name="title" content="Franz Sinaga" />
        <meta
          name="description"
          content="Franz Sinaga is a software engineer who specializes in Frontend-focused Web Developer"
        />
      </Head>

      <AnimatedBgHero>
        <BlurFade inView>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl">
            I build frontend interfaces that hold up under real use.
          </h1>
        </BlurFade>
        <BlurFade inView delay={0.1}>
          <p className="mt-6 max-w-lg font-display text-lg italic leading-relaxed text-ink2">
            Based in Jakarta, currently building the POLARIS web application
            at MSIG Indonesia.
          </p>
        </BlurFade>
        <BlurFade inView delay={0.2}>
          <div className="mt-8 flex items-center gap-6">
            {SOCIALS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                {...linkProps(href)}
                className="text-sm text-ink underline decoration-rule2 decoration-1 underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
              >
                {label}
              </a>
            ))}
          </div>
        </BlurFade>
      </AnimatedBgHero>

      <section id="about" className="border-b border-rule">
        <div className="container mx-auto px-4 py-20 md:px-8 md:py-28">
          <div className="head-margin">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              01 — About.
            </p>
            <div>
              <BlurFade inView>
                <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
                  About
                </h2>
              </BlurFade>
              <BlurFade inView delay={0.1}>
                <p className="drop-cap mt-6 max-w-2xl text-base leading-relaxed text-ink2">
                  I&apos;m a Front-End Developer based in Jakarta, Indonesia. I
                  enjoy turning product requirements into fast, maintainable
                  interfaces — and I&apos;m curious about the rest of the web
                  platform as it evolves.
                </p>
              </BlurFade>
              <BlurFade inView delay={0.2}>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {STACK.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-rule px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-rule">
        <div className="container mx-auto px-4 py-20 md:px-8 md:py-28">
          <div className="head-margin">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              02 — Work.
            </p>
            <div>
              <BlurFade inView>
                <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
                  Projects
                </h2>
              </BlurFade>
              <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project, index) => (
                  <BlurFade key={project.title} inView delay={0.1 + index * 0.1}>
                    <ProjectCards index={index + 1} {...project} />
                  </BlurFade>
                ))}
              </div>
              <BlurFade inView delay={0.4}>
                <a
                  href="https://github.com/FranzSinaga?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-12 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-rule2 decoration-1 underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
                >
                  All projects on GitHub
                  <span aria-hidden="true">→</span>
                </a>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-rule">
        <div className="container mx-auto px-4 py-20 md:px-8 md:py-28">
          <div className="head-margin">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              03 — Experience.
            </p>
            <div>
              <BlurFade inView>
                <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
                  Where I&apos;ve worked
                </h2>
              </BlurFade>
              <div className="mt-10">
                <Timeline />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container mx-auto px-4 py-20 md:px-8 md:py-28">
          <div className="head-margin">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              04 — Contact.
            </p>
            <div>
              <BlurFade inView>
                <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
                  Get in touch
                </h2>
              </BlurFade>
              <BlurFade inView delay={0.1}>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink2">
                  Whether you have a question or just want to say hi, feel
                  free to reach out.
                </p>
              </BlurFade>
              <BlurFade inView delay={0.2}>
                <a
                  href="mailto:sinagafranz12@gmail.com"
                  className="mt-6 inline-flex items-center gap-1.5 font-mono text-lg text-ink underline decoration-rule2 decoration-1 underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
                >
                  sinagafranz12@gmail.com
                  <span aria-hidden="true">→</span>
                </a>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-rule">
        <div className="container mx-auto px-4 py-8 md:px-8">
          <p className="max-w-3xl font-mono text-xs leading-relaxed text-muted">
            Franz Sinaga — Frontend Developer, Jakarta, Indonesia.{" "}
            {SOCIALS.map(({ label, href }, index) => (
              <span key={label}>
                <a
                  href={href}
                  {...linkProps(href)}
                  className="text-ink2 underline decoration-rule2 decoration-1 underline-offset-2 transition-colors duration-200 hover:text-accent hover:decoration-accent"
                >
                  {label}
                </a>
                {index < SOCIALS.length - 1 ? " · " : ". "}
              </span>
            ))}
            © 2026 Franz Aditya Natanael Sinaga.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
