import { styled, keyframes } from "@fivem-shop/react";

const loading = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

export const Main = styled("main", {});
export const Form = styled("form", {
  minHeight: "86vh",
  paddingTop: "calc(100px + 4rem)",
  maxWidth: "482px",
  margin: "auto",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  h1: {
    width: "100%",
    textAlign: "left",
    fontWeight: 700,
    fontSize: "$heading-ultra-small",
    marginBottom: "36px",
  },

  button: {
    width: "100%",

    svg: {
      animation: `${loading} 0.5s linear infinite`,
    },
  },

  label: {
    display: "flex",
    justifyContent: "space-between",
  },

  section: {
    width: "100%",
    marginBottom: "30px",
    span: {
      color: "#ff7373",
    },

    div: {
      "input:-webkit-autofill": {
        "-webkit-box-shadow": "0 0 0 30px #0E1015 inset !important",
        "-webkit-text-fill-color": "white !important",
      },
    },

    h3: {
      a: {
        textDecoration: "none",
        color: "$blue-700",
        fontWeight: 500,
        fontSize: "15px",
      },
    },
  },

  h4: {
    marginTop: "14px",
    textAlign: "center",
    fontWeight: 400,
    fontSize: "$ultra-small",
    a: {
      textDecoration: "none",
      color: "$blue-700",
    },
  },
  paddingBottom: "40px",
});
