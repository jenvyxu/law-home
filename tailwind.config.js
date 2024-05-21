export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      // spacing: {
      //   128: "32rem",
      //   144: "36rem",
      // },
      width: {
        "50px": "50px",
      },
      padding: {
        "18px": "18px",
      },
      borderWidth: {
        5: "5px",
      },
      colors: {
        "blue-0": "#0E4D90",
        "blue-1": "#3B7BBF",
        black: "#000000",
        bc: "#A6A6A6",
        "grey-0": "#E5E5E5",
        home: "rgb(166, 166, 166)",
      },
      borderRadius: {
        "4xl": "30px",
      },
    },
  },
  plugins: [],
};
