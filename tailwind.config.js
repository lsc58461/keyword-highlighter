const range = (start, end) => {
  let array = [];
  for (let i = start; i <= end; ++i) {
    array.push(i);
  }
  return array;
};

const pxToRem = (px, base = 16) => `${px / base}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./public/index.html"],
  theme: {
    spacing: {
      ...range(0, 2000).reduce((acc, px) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    fontSize: {
      ...range(0, 2000).reduce((acc, px) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    extend: {
      fontFamily: {
        pre: "Pretendard Variable",
      },
      screens: {
        tablet: {
          min: "768px",
        },
        desktop: {
          min: "1200px",
        },
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        ".flex-row-center": {
          "@apply flex flex-row items-center justify-center": "",
        },
        ".flex-col-center": {
          "@apply flex flex-col items-center justify-center": "",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
