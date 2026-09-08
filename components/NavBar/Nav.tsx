import dynamic from "next/dynamic";

const Toggle = dynamic(() => import("../ToogleTheme/ThemeToggle"), {
  ssr: false,
});

const NAV_LINKS = [
  { num: "01", href: "#about", label: "About" },
  { num: "02", href: "#projects", label: "Projects" },
  { num: "03", href: "#experience", label: "Experience" },
  { num: "04", href: "#contact", label: "Contact" },
];

const Nav = () => {
  return (
    <header className="border-b border-rule">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-5 md:px-8">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-ink">
          Franz Sinaga
        </a>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-baseline gap-1.5 text-sm text-ink2 transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
            >
              <span className="font-mono text-xs text-muted">{link.num}</span>
              {link.label}
            </a>
          ))}
          <Toggle />
        </div>
      </div>
    </header>
  );
};

export default Nav;
