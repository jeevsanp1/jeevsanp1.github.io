const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily : { 
        'display' : ["JetBrains Mono"]
      },
      animation: {
        'spin-slow': 'spin 3.5s linear infinite',
        'aurora': "aurora 60s linear infinite",
        'shimmer': "shimmer 2s linear infinite"
      },
      backgroundImage: {
        'grid-low-poly': "url('/src/assets/low-poly-grid-haikei.svg')"
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0"
          },
          to: {
            backgroundPosition: "-200% 0"
          }, 
      },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        }, 
      }
    },
  },
  plugins: [
    addVariablesForColors,

  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

