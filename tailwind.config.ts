import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx,json}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#edf1ff',
          200: '#d8e1ff',
          300: '#b7c7ff',
          400: '#8ea4ff',
          500: '#687ef6',
          600: '#5262ea',
          700: '#444fce',
          800: '#3843a6',
          900: '#313b83'
        },
        ink: '#121729',
        sand: '#fff7f1',
        gold: '#e8b462'
      },
      fontFamily: {
        sans: ['Cairo', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(18, 23, 41, 0.10)',
        card: '0 18px 48px rgba(18, 23, 41, 0.08)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top right, rgba(255,255,255,.28), transparent 28%), linear-gradient(135deg, #5b4ff6 0%, #243b84 55%, #10172a 100%)'
      }
    }
  },
  plugins: []
};

export default config;
