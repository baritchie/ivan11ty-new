module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {        
        darkblue: '#124559',
        lightblue: '#598392',
        green: '#AEC3B0',
        lightgreen: 'EFF6E0',},
      fontFamily: {
        quat: ['Quattrocento', 'serif'],
        quatsans: ['Quattrocento Sans', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
