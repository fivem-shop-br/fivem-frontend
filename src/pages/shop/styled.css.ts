import { styled } from "@fivem-shop/react";
import { responsived } from "@src/styles/global.css";

export const Container = styled("main", {
  paddingTop: "calc(100px + 4rem)",

  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
  gap: "15px",

  "@media (max-width: 576px)": {
    padding: "0.5rem",
    paddingTop: "calc(50px + 4rem)",
  },

  ...responsived,
});

export const Shop = styled("div", {
  border: "1px solid #2D3439",
  borderRadius: "10px",

  padding: "20px",
  flex: "1 1 30%",

  display: "flex",
  flexDirection: "column",
  gap: "15px",

  div: {
    display: "flex",
    gap: "8px",

    ul: {
      h3: {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "130%",
      },

      span: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "130%",
        color: "$gray-500",
      },
    },
  },
});

export const Image = styled("div", {
  marginTop: "5px",
  width: "40px",
  height: "40px",
  borderRadius: "999px",
  background: "#2D3439",

  backgroundSize: "cover",
});
