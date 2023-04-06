/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.stories.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        alertOverlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        alertOverlayHide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        alertContentShow: {
          from: {
            opacity: 0,
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        alertContentHide: {
          from: {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
          to: {
            opacity: 0,
            transform: "translate(-50%, -48%) scale(0.96)",
          },
        },
      },
      animation: {
        slideDown: "slideDown 0.2s ease-out",
        slideUp: "slideUp 0.2s ease-out",
        alertOverlayShow: "alertOverlayShow 0.2s ease-out",
        alertContentShow: "alertContentShow 0.2s ease-out",
        alertContentHide: "alertContentHide 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
