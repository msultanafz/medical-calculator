/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-background":
          "url('/src/images/medical-background-123-transformed-transformed.jpeg')",
      },
      fontFamily: {
        lora: ["Lora"],
      },
    },
  },
  plugins: [],
};
