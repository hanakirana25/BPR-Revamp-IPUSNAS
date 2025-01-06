/** @type {import('tailwindcss').Config} */
// Primeui
import primeui from 'tailwindcss-primeui';

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#252F4A',
        'light-gray': '#F9F9F9',
        'light-pink': '#FEECF1',
        muted: '#8C919D',
        pink: '#F35F8B',
        primary: '#00A624',
        secondary: '#E3FFD9',
        'app-primary': {
          900: '#18090E',
          700: '#24191B',
          500: '#333333',
          400: '#848484',
          300: '#C1C1C1',
          200: '#EAEAEA',
        },
        'app-accent': {
          900: '#7A230C',
          700: '#B7501F',
          500: '#FF923F',
          300: '#FFCA8B',
          200: '#FFF1D8',
        },
        'app-neutral': {
          900: '#252525',
          700: '#929292',
          500: '#BEBEBE',
          300: '#D3D3D3',
          200: '#E9E9E9',
        },
        'app-semantic': {
          success: {
            300: '#7BC760',
            200: '#BDE3B0',
            100: '#e5f4df',
          },
          warning: {
            300: '#E9E9E9',
            200: '#D3D3D3',
            100: '#BEBEBE',
          },
          error: {
            300: '#FF7171',
            200: '#FFE3E3',
            100: '#FFB8B8',
          },
          info: {
            300: '#5CB1FF',
            200: '#EFF7FF',
            100: '#AED8FF',
          },
        },
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        sans: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
        'neue-text-pro': ['Neue Haas Grotesk Text Pro', 'sans-serif'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      height: {
        'dynamic-view': '100dvh',
      },
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      width: {
        'dynamic-view': '100dvw',
      },
    },
  },
  plugins: [primeui],
};
