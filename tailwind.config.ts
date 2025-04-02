import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          1:'#171717',
          2:'#000000',
          3: '#2E2E2E',
          4: '#454545',
        },
        blue: {
          // 1: '#0E78F9',
          1:'#1E90FF'
        },
        sky: {
          1: '#151B25',
          2: '#ECF0FF',
          3: '#F5FCFF',
        },
        orange: {
          // 1: '#FF742E',
          1:"#FF4500"
        },
        purple: {
          // 1: '#830EF9',
          1:'#32CD32'
        },
        yellow: {
          // 1: '#F9A90E',
          1:'#FFD700'
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
