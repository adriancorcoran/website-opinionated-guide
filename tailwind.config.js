const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brandGreen: "#9DD3CD",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
