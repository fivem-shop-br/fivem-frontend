import { styled } from "@fivem-shop/react";
import { loading } from "@src/pages/auth/styles.css";
import { scrollStyled } from "@src/styles/global.css";

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

export const Area = styled("form", {
  flex: 1,

  "overflow-y": "auto",
  ...scrollStyled,

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

  div: {
    maxWidth: "none",
  },

  variants: {
    table: {
      true: {
        display: "block",
      },
    },

    overflow: {
      true: {
        background: "transparent",
        display: "flex",
        gap: "20px",

        justifyContent: "flex-start",

        section: {
          textAlign: "left",
          label: {
            width: "100%",
            color: "white",
          },

          span: {
            color: "#ff7373",
          },
        },

        button: {
          maxWidth: "300px",

          svg: {
            animation: `${loading} 0.5s linear infinite`,
          },
        },
      },
    },
  },
});

export const Inputs = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "25px",

  section: {
    flex: 1,
  },
});

export const InputFile = styled("section", {
  maxWidth: "92px",

  position: "relative",

  input: {
    position: "absolute",
    opacity: 0,
  },

  "label:nth-child(2)": {
    background: "$gray-700",
    border: "1px solid $gray-700",
    padding: "30px",

    borderRadius: "5px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Table = styled("table", {
  width: "100%",
  borderCollapse: "collapse",

  td: {
    borderTop: "1px solid $gray-700",

    fontWeight: "400",
    fontSize: "14px",
    color: "white",
  },

  th: {
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "130%",
    color: "white",
  },

  "th, td": {
    textAlign: "left",
    padding: "15px 30px",
  },

  ".icons": {
    margin: "0 10px",
  },
});

export const SearchContainer = styled("main", {
  display: "flex",
  flexDirection: "column",

  flex: 1,
  gap: "5px",
});
