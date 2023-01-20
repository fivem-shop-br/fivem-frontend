import { styled } from "@fivem-shop/react";
import { responsived } from "@src/styles/global.css";
import { motion } from "framer-motion";

export const Container = styled(motion.header, {
  transition: "all 0.2s",
  position: "fixed",

  left: 0,
  right: 0,

  section: {
    position: "relative",
    ...responsived,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "> svg": {
      display: "none",
    },
  },

  marginTop: "48px",
  padding: "1.25rem 2rem",

  variants: {
    scrolled: {
      true: {
        marginTop: 0,
        backgroundColor: "rgba(19, 21, 27, 0.9)",
        backdropFilter: "blur(20px)",
      },
    },
    mobileNav: {
      true: {
        nav: {
          display: "flex",
        },
      },
    },
  },

  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "35px",

    "> a": {
      color: "white",
      fontSize: "1rem",
      fontWeight: 500,

      transition: "color 0.3s ease 0s",
      "&:hover": {
        color: "$hover-link",
      },
    },

    a: {
      textDecoration: "none",
    },

    div: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "18px",
    },
  },

  "@media (max-width: 768px)": {
    marginTop: 0,

    nav: {
      display: "none",
      flexDirection: "column",
      gap: "10px",
      margin: "10px 0",

      "> a": {
        fontWeight: 400,
        fontSize: "14px",
        width: "100%",
        textAlign: "left",
      },
    },

    section: {
      flexDirection: "column",
      alignItems: "flex-start",

      "> svg": {
        display: "block",
      },
    },

    defaultVariants: {
      scrolled: true,
    },
    backgroundColor: "rgba(19, 21, 27, 0.9)",
  },

  zIndex: 1,
});
