/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "main-bg-dark": "#020817",
        "main-bg-light": "#ffffff",
        "dark-text": "#020817",
        "light-text": "#F8FAFC",
        "dark-text-muted": "#64748B",
        "light-text-muted": "#94A3B8",
        primary: "#2563EB",
        "card-dark": "#0F172A",
        "card-light": "#F8FAFC",
      },
      fontFamily: {
        Poetsen: ["Poetsen One", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
