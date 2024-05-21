import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B31942',
        secondary: '#0F2446',
      },
      screens: {
        desktop: '1440px',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
