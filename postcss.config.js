import { resolve } from "node:path";

export default {
  plugins: {
    "@csstools/postcss-global-data": {
      files: [resolve(import.meta.dirname, "src/styles/media-queries.css")],
    },
    autoprefixer: {},
    "postcss-custom-media": {},
    "postcss-font-magician": {
      aliases: {
        Barlow: "Barlow Semi Condensed",
      },
      variants: {
        Barlow: {
          500: ["woff2"],
          600: ["woff2"],
        },
      },
      display: "swap",
      foundries: ["google"],
    },
  },
};
