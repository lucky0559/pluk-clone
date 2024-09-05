import type { Config } from "tailwindcss";

export const colors = {
  primary: "#FFFFFF",
  secondary: "#FFF8E8",
  mainFont: "#990D35",
  secondaryFont: "#262626"
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
        Amsterdam: "Amsterdam"
      },
      colors
    }
  },
  plugins: []
};
export default config;
