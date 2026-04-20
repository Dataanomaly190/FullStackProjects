/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tertiary": "#343433",
        "outline-variant": "#bfc9c5",
        "background": "#fcf9f8",
        "on-surface": "#1c1b1b",
        "surface-container-highest": "#e5e2e1",
        "surface-container-high": "#ebe7e7",
        "surface-container": "#f0edec",
        "surface-container-low": "#f6f3f2",
        "surface-container-lowest": "#ffffff",
        "primary-container": "#04544b",
        "primary": "#003b34",
        "surface-dim": "#dcd9d9",
        "surface-variant": "#e5e2e1",
        "surface-bright": "#fcf9f8",
        "surface": "#fcf9f8",
        "on-primary": "#ffffff",
        "on-surface-variant": "#3f4946",
        "secondary": "#b90d1d",
        "secondary-container": "#dd2f32",
        "on-secondary": "#ffffff",
        "outline": "#6f7976",
        "error": "#ba1a1a",
        "inverse-surface": "#313030",
        "inverse-on-surface": "#f3f0ef",
      },
      fontFamily: {
        headline: ["Epilogue", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        label: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
        "slide-in-left": "slideInLeft 0.9s ease forwards",
        "slide-in-right": "slideInRight 0.9s ease forwards",
        "drift": "drift 20s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        drift: {
          "0%, 100%": { transform: "scale(1.05) translate(0, 0)" },
          "50%": { transform: "scale(1.1) translate(-1%, -1%)" },
        },
      },
    },
  },
  plugins: [],
};
