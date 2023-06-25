/** @type {import('tailwindcss').Config} */
export const content = [
  // './src/pages/**/*.{js,ts,jsx,tsx}',
  // './src/components/**/*.{js,ts,jsx,tsx}',
  './src/**/*.{html,js,ts,jsx,tsx}'
];
export const theme = {
  screens: {
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }
    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }
    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  backgroundSize: {
    'cover': 'cover',
    '50%': '50%',
    '16': '4rem',
  },
  extend: {
    
  },
};
export const plugins = [];
