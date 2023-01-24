import { globalCss } from "@fivem-shop/react";

export const scrollStyled = {
  "&::-webkit-scrollbar": {
    width: "0.2rem",
  },

  "&::-webkit-scrollbar-track": {
    background: "$gray-800",
  },

  "&::-webkit-scrollbar-thumb": {
    borderRadius: "2rem",
    background: "$gray-500",
  },
};

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "$default",
    "scroll-behavior": "smooth",
  },

  body: {
    background: "$gray-900",
    color: "white",
    ...scrollStyled,
    "-webkit-font-smoothing": "antialiased",
  },

  "button, input": {
    outline: "none",
    border: 0,
  },

  "#nprogress .spinner-icon": {
    borderTopColor: "$blue-700",
    borderLeftColor: "$blue-700",
  },

  "#nprogress .bar": {
    background: "$blue-700",
  },

  "#nprogress .peg": {
    boxShadow: "0 0 10px $blue-700, 0 0 5px $blue-700",
  },

  ".swiper": {
    paddingBottom: "50px !important",
  },
});

export const responsived = {
  margin: "0 auto",
  "@sm": {
    maxWidth: "540px !important",
  },

  "@md": {
    maxWidth: "720px !important",
  },

  "@lg": {
    maxWidth: "960px !important",
  },

  "@xl": {
    maxWidth: "1140px !important",
  },

  "@2xl": {
    maxWidth: "1320px !important",
  },
};
