const {nextui} = require("@nextui-org/react");
// const headlessuiPlugin = require('@headlessui/tailwindcss');

module.exports = {
  content: ['./src/**/*.{js,mjs,jsx,ts,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}