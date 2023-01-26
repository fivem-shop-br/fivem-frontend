import { styled } from "@fivem-shop/react";

export const Container = styled("main", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "35px",
});

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  h1: {
    fontWeight: "400",
    fontSize: "$heading-small",
    lineHeight: "130%",
  },
});

export const Area = styled("section", {
  flex: 1,

  background: "$gray-800",
  borderRadius: "5px",

  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",

  textAlign: "center",

  color: "#CCCCCC",

  ul: {
    h2: {
      fontWeight: 500,
      fontSize: "22px",
      lineHeight: "130%",
    },

    span: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "130%",

      color: "$gray-500",
    },
  },

  variants: {
    overflow: {
      true: {
        background: "transparent",
        display: "block",

        section: {
          textAlign: "left",
          label: {
            width: "100%",
            color: "white",
          },

          input: {
            padding: "14px",
          },
        },

        button: {
          marginTop: "15px",
        },
      },
    },
  },
});
