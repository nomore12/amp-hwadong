/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      strokeWidth: {
        3: '3',
        4: '4',
      },
      spacing: {
        128: '32rem',
        360: '360px',
        400: '400px',
        480: '480px',
        600: '600px',
        720: '720px',
        840: '840px',
      },
      letterSpacing: {
        extraWidest: '.3em',
      },
      backgroundImage: {
        'background-logo': "url('src/components/assets/images/logo-2-1.png')",
      },
      fontSize: {
        xxs: [
          '0.5rem',
          {
            lineHeight: '1rem',
            fontWeight: '200',
          },
        ],
      },
    },
  },
  plugins: [],
};
