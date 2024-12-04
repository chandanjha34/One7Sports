module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true, // Centers the container horizontally
      padding: {
        DEFAULT: "1rem", // Default padding for all screen sizes
        sm: "2rem",      // Padding for small screens and above
        lg: "4rem",      // Padding for large screens and above
        xl: "5rem",      // Padding for extra-large screens and above
      },
    },
    extend: {},
  },
  plugins: [],
}