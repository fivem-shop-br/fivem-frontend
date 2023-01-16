import { styled } from "@fivem-shop/react";

export const Main = styled("main", {
  marginTop: "134px",
  background: "$gray-700",
  padding: "64px",

  display: "flex",
  justifyContent: "space-around",

  textAlign: "center",
  gap: "50px",

  "h1, h1 span": {
    color: "white",
    fontWeight: 700,
    fontSize: "40px",
  },

  "h1 span": {
    color: "$blue-700",
  },

  span: {
    color: "$gray-500",
    fontWeight: 500,
    fontSize: "$large",
  },

  "@media (max-width: 992px)": {
    flexDirection: "column",
  },
});
