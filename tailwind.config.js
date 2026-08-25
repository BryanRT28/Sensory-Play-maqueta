/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#b80049",
        "primary-container": "#e2165f",
        "on-primary": "#ffffff",
        "secondary": "#4f54b4",
        "secondary-container": "#959aff",
        "on-secondary": "#ffffff",
        "tertiary": "#3d6700",
        "tertiary-container": "#4f8207",
        "on-tertiary": "#ffffff",
        "background": "#f8f9fa",
        "on-background": "#191c1d",
        "surface": "#ffffff",
        "surface-container-low": "#f3f4f5",
        "on-surface": "#191c1d",
        "on-surface-variant": "#5b3f43",
        "outline-variant": "#e4bdc2",
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "body": ["Work Sans", "sans-serif"],
        "headline": ["Plus Jakarta Sans", "sans-serif"],
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}