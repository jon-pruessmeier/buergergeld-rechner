import { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
