// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'fondo-principal': "gray-900",
      },
      backgroundImage: {
        'fondo-secundario': "gray-700",
      }
    },
  },
  plugins: [],
};
