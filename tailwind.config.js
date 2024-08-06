/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // scrollbar: {
      //   'thumb-rounded': {
      //     '::-webkit-scrollbar-thumb': {
      //       borderRadius: '14px',
      //     },
      //   },
      //   'track-rounded': {
      //     '::-webkit-scrollbar-track': {
      //       borderRadius: '5px',
      //     },
      //   },
      // },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}