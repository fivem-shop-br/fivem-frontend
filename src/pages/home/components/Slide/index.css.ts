import { styled } from "@fivem-shop/react";
import { responsived } from "@src/styles/global.css";

export const Container = styled("div", {
  maxWidth: "100%",

  "@media (max-width: 576px)": {
    padding: "0.5rem",
  },

  ...responsived,
});

export const ContainerSingular = styled("div", {
  padding: "2rem",

  background: "$gray-800",
  borderRadius: "8px",

  display: "flex",
  flexDirection: "column",

  gap: "24px",

  height: "100%",

  p: {
    fontSize: "$small",
    lineHeight: "29px",
    color: "$gray-500",
  },

  div: {
    display: "flex",
    gap: "20px",

    h1: {
      color: "$blue-700",
      lineHeight: "34px",
      fontSize: "$ultra-large",
    },

    span: {
      color: "white",
    },
  },

  cursor: "grabbing",
  userSelect: "none",

  img: {
    width: "100%",
    height: "100%",
    margin: "auto 0 0",
    objectFit: "cover",
    borderRadius: "5px",
  },
});

export const Box = styled("div", {
  width: "60px",
  height: "60px",
  background: "$cyan-900",
  borderRadius: "8px",

  color: "$blue-700",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
