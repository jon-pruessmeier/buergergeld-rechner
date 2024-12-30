import { Config } from "tailwindcss";
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkCenter: "#0a0a0a",
        darkEdge: "#2a2a2a",
        primary: "#ffcc00",
        secondary: "#e6b800",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
