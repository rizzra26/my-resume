import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

export default <Partial<Config>>{
  content: ["docs/content/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
