import { styled } from "@fivem-shop/react";
import { responsived } from "@src/styles/global.css";
import { motion } from "framer-motion";

const mediaResposives = {
  "@media (max-width: 992px)": {
    flexDirection: "column-reverse",
  },

  "@media (max-width: 768px)": {
    padding: "calc(50px + 4rem) 0px",
  },

  "@media (max-width: 576px)": {
    img: {
      width: "80vw",
      height: "100%",
    },

    p: {
      marginTop: "calc(2vh + 5px)",
    },

    "h1, span": {
      fontSize: "$heading-medium",
    },

    "section div, h1, span, p": {
      padding: "0.5rem",
    },

    "section div": {
      marginTop: "calc(9vh + 5px)",
      flexDirection: "column",
      gap: "5px",
    },
  },
};

export const Main = styled(motion.main, {
  minHeight: "86vh",
  paddingTop: "calc(135px + 4rem)",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  h1: {
    fontWeight: 800,
    fontSize: "$heading-large",
    color: "white",
    lineHeight: 0.75,
  },

  span: {
    fontWeight: 800,
    fontSize: "$heading-large",
    color: "$blue-700",
  },

  p: {
    fontWeight: 500,
    fontSize: "$medium",
    color: "$gray-500",

    marginTop: "28px",
    lineHeight: "26px",
  },

  div: {
    marginTop: "84px",

    display: "flex",
    gap: "26px",
  },

  a: {
    textDecoration: "none",
    color: "white",
  },

  ...mediaResposives,
  ...responsived,
});
