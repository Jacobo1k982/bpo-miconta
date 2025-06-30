// tailwind.config.js
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        'fondo-principal': '#111827', // gris oscuro (gray-900)
      },
      backgroundImage: {
        'fondo-secundario': 'linear-gradient(to right, #1f2937, #374151)', // simulando gray-700 gradient
      },
    },
  },
  plugins: [
    forms,
    typography,
  ],
};
