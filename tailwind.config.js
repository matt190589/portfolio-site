module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      carousel: {
        "&:hover .px-4": {
          opacity: 1,
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
