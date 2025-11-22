export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        surface: '#F3F3F3',
        text: '#0B0B0B',
        muted: '#757575',
        dark: '#0E0E0E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    }
  },
  plugins: [],
}
