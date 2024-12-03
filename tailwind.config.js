/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "my-background": "url('/img/medical-background.jpg')",
      },
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
