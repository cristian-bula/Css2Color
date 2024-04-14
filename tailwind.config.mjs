/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightWhite: "#111827",
        darkBlack: "#f9fafb",
      },
      animation: {},
      keyframes: {},
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [addDynamicIconSelectors(), nextui()],
};
