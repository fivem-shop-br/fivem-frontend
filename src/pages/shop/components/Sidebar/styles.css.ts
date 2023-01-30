import { styled } from "@fivem-shop/react";
import { scrollStyled } from "@src/styles/global.css";

export const Container = styled("main", {
  display: "flex",
  height: "100vh",
});

export const SideBarContainer = styled("aside", {
  minWidth: "290px",
  background: "$gray-800",

  overflow: "auto",
  ...scrollStyled,
});

export const Shop = styled("div", {
  padding: "20px",

  div: {
    display: "flex",
    gap: "8px",

    ul: {
      display: "flex",
      flexDirection: "column",
      h3: {
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "130%",
      },

      span: {
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "130%",
        color: "$gray-500",
      },
    },
  },
});

export const Liner = styled("div", {
  width: "100%",
  height: "1px",
  background: "$gray-700",
});

export const Menu = styled("menu", {
  paddingTop: "20px",

  ".item[data-state='open']": {
    ".CaretUp": {
      transform: "rotate(180deg)",
    },
  },

  ".CaretUp": {
    transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  },

  a: {
    textDecoration: "none",
    color: "white",
  },
});

export const NavItem = styled("div", {
  position: "relative",
  padding: "15px 25px",
  gap: "11px",

  display: "flex",
  alignItems: "center",

  h3: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "130%",
  },

  cursor: "pointer",

  variants: {
    active: {
      true: {
        background: "rgba(0, 149, 255, 0.05)",

        color: "$blue-700",

        h3: {
          color: "#6FB4E4",
        },

        "&::after": {
          width: "3.04px",
          height: "34px",

          background: "$blue-700",
          borderRadius: "0px 5px 5px 0px",

          position: "absolute",
          left: "0",

          content: "",
          lineHeight: "100%",

          fontWeight: 600,
          fontSize: "10px",
        },

        cursor: "default",
      },
    },
    content: {
      true: {
        padding: "15px 60px",
      },
    },
  },

  ".CaretUp": {
    position: "absolute",
    right: "20px",
  },
});

export const Children = styled("div", {
  display: "flex",

  flex: 1,
  padding: "25px",
  gap: "35px",

  variants: {
    overflow: {
      true: {
        padding: "25px 25px 0 25px",
      },
    },
  },
});
