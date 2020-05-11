/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      black: "#111",
      dark: "#0f1522",
      white: "#fff",
      // yellow: "#ffcb08",
      // green: "#9AE6B4",
      pink: "#e5495f"
      // teal: "#6cccde"
    },
    extend: {
      maxWidth: {
        "80": "80rem",
        "90": "90rem"
      },
      fontSize: {
        r5: "5rem",
        r6: "6rem"
      },
      borderRadius: {
        xl: "1.2rem"
      }
    }
  },
  variants: {},
  plugins: []
};
