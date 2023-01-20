import { styled } from "@fivem-shop/react";

export const Container = styled("main", {
  minHeight: "86vh",
  paddingTop: "calc(100px + 4rem)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  maxWidth: "482px",
  margin: "auto",

  ul: {
    textAlign: "center",

    span: {
      fontWeight: 400,
      fontSize: "$medium",
      color: "$gray-500",
    },

    h1: {
      marginTop: "5px",
      fontWeight: 500,
      fontSize: "$heading-small",
    },
  },

  section: {
    marginTop: "65px",
    width: "100%",

    display: "flex",
    flexDirection: "column",
    gap: "30px",

    div: {
      label: {
        span: {
          color: "#E8564D",
        },
      },

      button: {
        width: "100%",
        padding: "20px 50px",
        background: "#238636",
        fontWeight: 500,
      },
    },
  },
});
