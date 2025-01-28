/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFC107', // Vibrant Yellow
        secondary: '#FFFFFF', // White
        accent: '#FF4081', // Pink accent
        dark: '#2C2C2C', // Dark gray for text
        light: '#F5F5F5', // Light background
        success: '#4CAF50', // Green
        info: '#2196F3', // Blue
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'gradient': 'gradientBG 15s ease infinite',
        'slide-up': 'slideUp 1s ease-out forwards',
        'neon': 'neonPulse 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(255, 193, 7, 0.5)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};