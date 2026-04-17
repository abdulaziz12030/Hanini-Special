import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: '#111111',
          gold: '#9C8231',
          cream: '#F6F2E8',
          muted: '#EAE5D8'
        }
      },
      boxShadow: {
        soft: '0 20px 50px rgba(0,0,0,0.08)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top right, rgba(156,130,49,0.28), transparent 35%), radial-gradient(circle at bottom left, rgba(156,130,49,0.14), transparent 30%)'
      }
    }
  },
  plugins: []
};

export default config;
