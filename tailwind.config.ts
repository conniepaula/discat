import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    boxShadow: {
      sm: "0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)",
      md: "0 4px 4px rgba(0,0,0,0.16)",
      lg: "0 8px 16px rgba(0,0,0,0.24)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: "#5865F2",
        gray: {
          50: "#ECEDEE",
          100: "#DCDDDE",
          200: "#B9BBBE",
          300: "#8E9297",
          400: "#72767D",
          500: "#5C6067",
          550: "#4F545C",
          600: "#464950",
          700: "#36393F",
          800: "#2F3136",
          900: "#202225",
        },
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
