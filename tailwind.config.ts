
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: '#151515',
          navy: '#151515',
          gold: '#8b6f2f',
          cream: '#faf7f2',
          sand: '#f2ece2'
        }
      },
      boxShadow: {
        soft: '0 18px 55px rgba(21,21,21,0.08)'
      }
    }
  },
  plugins: []
} satisfies Config
