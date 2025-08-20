/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'cyber-blue': '#00f5ff',
        'cyber-purple': '#8b5cf6',
        'neon-pink': '#ff006e',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'binary-rain': 'binary-rain 10s linear infinite',
      },
    },
  },
  plugins: [],
};
