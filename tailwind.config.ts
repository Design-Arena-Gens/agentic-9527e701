import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        floka: {
          teal: "#17C3B2",
          slate: "#0F172A",
          sand: "#F6F1E9",
          coral: "#FF6B6B",
          mint: "#E9FBF7",
        },
      },
      borderRadius: {
        xl: "1rem",
      },
      boxShadow: {
        brand: "0 10px 30px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

