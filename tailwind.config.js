module.exports = {
  content: ['./*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: { surface: '#0B1120', foreground: '#F1F5F9', accent: '#7DD3FC', muted: '#94A3B8' },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        display: ['Outfit', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
