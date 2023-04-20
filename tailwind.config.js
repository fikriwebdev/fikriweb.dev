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
        checked: {
          "0%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        unchecked: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(0)",
          },
        },

        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.2s ease-out",
        slideUp: "slideUp 0.2s ease-out",
        alertOverlayShow: "alertOverlayShow 0.2s ease-out",
        alertOverlayHide: "alertOverlayHide 0.2s ease-out",
        alertContentShow: "alertContentShow 0.2s ease-out",
        alertContentHide: "alertContentHide 0.2s ease-out",
        checked: "checked 0.2s ease-out",
        unchecked: "unchecked 0.2s ease-out",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
