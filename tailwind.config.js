/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins, sans-serif",
      mulish: "Mulish, sans-serif",
    },
    extend: {
      backgroundImage: {
        heroImg: "url('./img/adoyi.png')",
      },
      boxShadow: {
        "5xl": "0 0 10px rgba(0,0,0,.1)",
        "6xl" : "0 1.2rem 3.2rem rgba(0, 0, 0, 0.03)"
      },
      keyframes: {
        ane: {
          "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60% " },
          "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40% " },
        },
        rotate: {
          "100%": { transform: "rotate(1turn)" },
        },
      },
      animation: {
        ane: "ane 8s ease-in-out infinite",
        rotate: "rotate 9s linear infinite",
      },
    },
    plugins: [],
  },
};
