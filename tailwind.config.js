module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        whiteColor: "#f5f5f5",
        primary: "#5f3e8e",
        secondary: "#a791ca",
        dark: "#442C63",
        "new-color":"#bf9dda"
      },
      backgroundColor: {
        "primary-color": "#5F3E8E",
      },
      screens: {
        lg: { max: "914px" },
        mid: { max: "724px" },
        base: { max: "540px" },
        sm: { max: "280px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
