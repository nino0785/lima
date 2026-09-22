// ============================================================
// Lima Store — Configuração do Tailwind (cores e fontes)
// ============================================================

tailwind.config = {
  theme: {
    extend: {
      colors: {
        background: "oklch(0.975 0.008 85)",
        foreground: "oklch(0.14 0.008 70)",
        card: "oklch(0.995 0.003 85)",
        primary: "oklch(0.14 0.008 70)",
        "primary-foreground": "oklch(0.985 0.005 85)",
        secondary: "oklch(0.91 0.014 82)",
        muted: "oklch(0.93 0.009 82)",
        "muted-foreground": "oklch(0.47 0.012 70)",
        accent: "oklch(0.71 0.11 82)",
        border: "oklch(0.82 0.012 78)",
        "hero-foreground": "oklch(0.985 0.005 85)",
        "hero-muted": "oklch(0.86 0.012 82)",
        gold: "oklch(0.76 0.12 83)",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
    },
  },
};
