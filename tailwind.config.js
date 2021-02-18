const colors = require("tailwindcss/colors");

const isProduction = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./src/**/*.html"],
    options: {
      defaultExtractor: (content) => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
    enabled: isProduction,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
