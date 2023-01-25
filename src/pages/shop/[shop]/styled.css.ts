import { styled } from "@fivem-shop/react";

export const Container = styled("main", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "35px",

  ul: {
    h1: {
      fontWeight: "400",
      fontSize: "$heading-small",
      lineHeight: "130%",
    },

    h6: {
      fontWeight: "400",
      fontSize: "$ultra-small",
      lineHeight: "130%",

      color: "$gray-500",
    },
  },
});

export const Statistics = styled("section", {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",

  gap: "10px",
});

export const Stats = styled("section", {
  display: "flex",
  flexDirection: "column",
  flex: 1,

  gap: "10px",

  background: "$blue-700",
  borderRadius: "5px",

  padding: "15px",

  ul: {
    h2: {
      fontWeight: "500",
      fontSize: "$ultra-large",
      lineHeight: "100%",
    },

    span: {
      color: "white",
      fontWeight: "300",
      fontSize: "14px",
    },
  },

  div: {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    span: {
      fontWeight: "400",
      fontSize: "14px",
    },

    data: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      width: "35px",
      height: "35px",
      background: "$blue-500",
      borderRadius: "50%",
    },
  },

  variants: {
    secondary: {
      true: {
        background: "#1A1C22",
        ul: {
          span: {
            color: "$gray-500",
          },
        },

        div: {
          data: {
            background: "$gray-600",
          },
        },

        color: "$gray-500",
      },
    },
  },
});

export const Sales = styled("section", {
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
});
