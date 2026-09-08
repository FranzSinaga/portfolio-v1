/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "var(--color-paper)",
        paper2: "var(--color-paper-2)",
        ink: "var(--color-ink)",
        ink2: "var(--color-ink-2)",
        rule: "var(--color-rule)",
        rule2: "var(--color-rule-2)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        "accent-ink": "var(--color-accent-ink)",
        focus: "var(--color-focus)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "serif"],
        body: ["var(--font-body)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        btn: "2px",
        card: "2px",
      },
    },
  },
  plugins: [],
};
