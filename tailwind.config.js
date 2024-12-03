/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora"],
      },
      animation: {
        "ping-slow": "ping 1.5s infinite",
      },
    },
  },
  plugins: [],
};
