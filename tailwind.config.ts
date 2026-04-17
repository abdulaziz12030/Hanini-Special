import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { sand: '#f7f2e8', gold: '#9b7a2f', ink: '#151515', brown: '#4f3b19' },
      boxShadow: { soft: '0 20px 60px rgba(0,0,0,0.08)' }
    }
  },
  plugins: []
};
export default config;
