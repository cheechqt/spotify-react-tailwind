module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      "3xs": "250px",
      "2xs": "300px",
      xs: "400px",
      sm: "500px",
      md: "700px",
      maxmd: { max: "700px" },
      lg: "900px",
      xl: "1100px",
      "2xl": "1300px",
      "3xl": "1500px",
      "4xl": "1700px",
      "5xl": "1900px",
      "6xl": "2100px",
    },
    extend: {
      spacing: {
        "100-8": "calc(100%-8px)",
      },
      gridTemplateColumns: {
        "playlists-mobile": "repeat(auto-fill, minmax(208px, 1fr))",
        "playlists-tablet": "repeat(auto-fill, minmax(266px, 1fr))",
        "playlists-desktop": "repeat(auto-fill, minmax(180px, 1fr))",
        footer: "30% 40% 30%",
        footerSmall: "40% 50% 10%",
        search: "repeat(auto-fill,minmax(180px,1fr))",
        searchMedium: "1fr 1fr",
        libraryTab: "repeat(auto-fill,minmax(var(--cards-column-width),1fr))",
        libraryTabSmall: "1fr 1fr",
        listHead: "16px 1fr 16px",
        playlistDetails: "232px 1fr",
        "1fr": "1fr",
        trackDiv: "16px 36px 1fr 38px",
      },
      boxShadow: {
        "3xl": "0 16px 24px rgba(0, 0, 0, .3), 0 6px 8px rgba(0, 0, 0, .2)",
        playlistImg: "0 4px 60px rgb(0 0 0 / 50%)",
      },
      backgroundImage: {
        "search-card-gradient":
          "linear-gradient(0deg,transparent,rgba(0,0,0,.4))",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
