import { styled } from "@fivem-shop/react";
import { responsived } from "@src/styles/global.css";

export const Container = styled("main", {
  paddingTop: "calc(100px + 5rem)",

  h1: {
    fontWeight: 700,
    fontSize: "$heading-small",
  },

  section: {
    display: "flex",
    flexDirection: "column",

    gap: "25px",
  },
  ...responsived,
});

export const Config = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "40px",

  ul: {
    h2: {
      fontSize: "$small",
      fontWeight: 600,
    },
    p: {
      fontSize: "$small",
      color: "$gray-500",
      fontWeight: 400,
    },
  },

  div: {
    display: "flex",
    gap: "15px",
  },

  paddingBottom: "40px",
});
export const Topic = styled("section", {});
export const Perfil = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  div: {
    display: "flex",
    gap: "20px",
    ul: {
      marginTop: "5px",
      h3: {
        fontWeight: 400,
        lineHeight: "130%",
        fontSize: "$ultra-large",
      },

      span: {
        fontWeight: 400,
        lineHeight: "130%",
        fontSize: "$medium",
        color: "$gray-500",
      },
    },
  },
});

export const Image = styled("div", {
  marginTop: "5px",
  width: "75px",
  height: "75px",
  borderRadius: "999px",
  background: "#2D3439",

  backgroundSize: "cover",
});

export const Separator = styled("div", {
  width: "100%",
  height: "1px",
  background: "$gray-600",
});
