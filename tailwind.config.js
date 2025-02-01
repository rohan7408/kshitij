module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      fontSize: {
        xxs: "0.625rem",
        tiny: "0.75rem",
        md: "1rem",
      },
      height: {
        "screen-50": "50vh",
        "screen-60": "60vh",
        "screen-70": "70vh",
        "screen-80": "80vh",
        "screen-90": "90vh",
      },
      width: {
        "screen-90": "90vw",
        "screen-80": "80vw",
        "screen-70": "70vw",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "2.5rem",
          xl: "3rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            backdropFilter: "blur(0px)",
          },
          "100%": {
            opacity: "1",
            backdropFilter: "blur(3px)",
          },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95) translateY(10px)", opacity: "0" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
        modalSlideIn: {
          "0%": {
            transform: "translateY(20px) scale(0.95)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0) scale(1)",
            opacity: "1",
          },
        },
        fadeScale: {
          "0%": {
            transform: "scale(0.7) rotate(-15deg)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1) rotate(0)",
            opacity: "1",
          },
        },
        imageScale: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        slideUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideUpModal: {
          "0%": {
            transform: "translateY(40px) scale(0.95)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0) scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 500ms cubic-bezier(0.4,0,0.2,1)",
        scaleIn: "scaleIn 0.3s ease-out",
        modalSlideIn: "modalSlideIn 500ms ease-out",
        fadeScale: "fadeScale 600ms cubic-bezier(0.34,1.56,0.64,1)",
        imageScale: "imageScale 1000ms cubic-bezier(0.4,0,0.2,1)",
        slideUp: "slideUp 800ms cubic-bezier(0.4,0,0.2,1) 100ms",
        slideUpModal: "slideUpModal 700ms cubic-bezier(0.34,1.56,0.64,1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
