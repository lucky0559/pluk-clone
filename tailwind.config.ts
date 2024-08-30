import type { Config } from "tailwindcss";

export const colors = {
  primary: "#E2E8CE",
  secondary: "#ACBFA4",
  mainFont: "#FF1B1C",
  secondaryFont: "#262626",
  cWhite: "#FFFFFF"
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontFamily: {
        Montserrat: "Montserrat",
        Amsterdam: "Amsterdam"
      },
      colors
    }
  },
  plugins: []
};
export default config;
