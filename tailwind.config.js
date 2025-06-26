// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-principal': "linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)",
      }
    },
  },
  plugins: [],
};
