import { styled } from "@fivem-shop/react";
import { responsived } from "@src/styles/global.css";

export const Container = styled("main", {
  marginTop: "148px !important",
  display: "flex",
  justifyContent: "space-between",

  h1: {
    fontWeight: 800,
    fontSize: "$heading-large",
    color: "white",
    lineHeight: "67px",
  },

  span: {
    fontWeight: 800,
    color: "$blue-700",
    fontSize: "$heading-large",
  },

  p: {
    fontWeight: 500,
    color: "$gray-500",
    fontSize: "$medium",

    marginTop: "26px",
    lineHeight: "26px",
  },

  "@media (max-width: 992px)": {
    flexDirection: "column",

    gap: "80px",
  },

  "@media (max-width: 576px)": {
    padding: "0.5rem",
  },

  ".ToggleGroup": {
    position: "absolute",
    top: "-60px",

    display: "inline-flex",
    background: "$gray-700",
    borderRadius: "8px",
  },

  ".ToggleGroupItem": {
    cursor: "pointer",
    fontWeight: 700,
    backgroundColor: "$gray-700",
    color: "$gray-600",
    fontSize: "$ultra-small",
    padding: "10px 20px",
    border: 0,
    outline: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    transition: "0.2s",
  },

  ".ToggleGroupItem:first-child": {
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
  },
  ".ToggleGroupItem:last-child": {
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
  },
  ".ToggleGroupItem:hover": { color: "$gray-500" },
  '.ToggleGroupItem[data-state="on"]': {
    borderRadius: "8px",
    background: "$gray-500",
    color: "$white",
  },
  ".ToggleGroupItem:focus": { position: "relative" },

  ...responsived,
});

export const CardContainer = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Card = styled("div", {
  background: "$gray-700",
  borderRadius: "8px",
  padding: "40px",
  width: "470px",
  "@media (max-width: 576px)": { width: "auto" },
  h3: { fontWeight: 600, fontSize: "$small", color: "$gray-500" },
  span: { fontWeight: 600, fontSize: "$medium", color: "rgba(65, 73, 80)" },
  h1: { fontWeight: 800, fontSize: "$heading-small !important" },
  p: {
    fontWeight: 400,
    lineHeight: "18px",
    color: "$gray-500",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  "> p span": { color: "$blue-700", fontSize: "$medium" },
  button: { width: "100%", margin: "50px auto 0 auto" },
});
