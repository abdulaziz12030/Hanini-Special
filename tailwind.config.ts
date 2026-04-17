import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0B0B',
          gold: '#B08D37',
          cream: '#F7F1E3'
        }
      }
    },
  },
  plugins: [],
};

export default config;
