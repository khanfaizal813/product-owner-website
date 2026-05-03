/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,scss}'],
  theme: {
    extend: {
      colors: {
        brand: '#f68b1f',
        'brand-dark': '#d45f09',
        accent: '#1e8b5a',
        surface: '#ffffff',
        muted: '#64748b',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"League Spartan"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 40px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
