import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'somstyle-blue': '#04E4FF',
        'somstyle-blue-deep': '#0284A8',
        'somstyle-gray-light': '#F5F5F5',
        'somstyle-gray-dark': '#333333',
        'somstyle-ink': '#101820',
        'somstyle-cream': '#F8F5EF',
      },
      boxShadow: {
        'premium': '0 24px 70px rgba(16, 24, 32, 0.14)',
        'premium-soft': '0 18px 45px rgba(16, 24, 32, 0.10)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;




