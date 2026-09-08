import React from "react";

const AnimatedBgHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="border-b border-rule">
      <div className="container mx-auto px-4 py-20 md:px-8 md:py-28">
        <div className="head-margin">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
            00 — Hello.
          </p>
          <div className="max-w-3xl">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedBgHero;
