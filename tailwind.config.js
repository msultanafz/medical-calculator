/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-background": "url('/src/images/background-medical-hd.jpg')",
      },
      fontFamily: {
        lora: ["Lora"],
      },
    },
  },
  plugins: [],
};
