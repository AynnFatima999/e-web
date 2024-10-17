import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins : ["Poppins, sans-serif"],
        Roboto: ['Roboto', "sans-serif"],
        StyleScript: ["Style Script" ,"cursive"] ,
       Merienda: ["Merienda", 'cursive']
  
      },
    },
  },
  plugins: [],
};
export default config;
