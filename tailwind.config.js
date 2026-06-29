/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#F8F6F3',
        accent: {
          DEFAULT: '#C9A063',
          hover: '#B8935A',
        },
        background: '#FFFFFF',
        surface: '#F8F6F3',
        text: {
          DEFAULT: '#1A1A1A',
          muted: '#6B6B6B',
        },
        border: '#E8E4DF',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
      },
      lineHeight: {
        tight: '0.95',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
