import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        HabibSky:'#C3EBFA',
        HabibSkyLight: '#EDF9FD',
        HabibPurple: "#CFCEFF",
        HabibPurpleLight: '#F1F0FF',
        HabibYellow: '#FAE27C',
        HabibYellowLight: '#FEFCE8',


      }
    },
  },
  plugins: [],
};
export default config;
