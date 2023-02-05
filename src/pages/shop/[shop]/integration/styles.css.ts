import * as Accordion from "@radix-ui/react-accordion";
import { styled } from "@fivem-shop/react";
import { scrollStyled } from "@src/styles/global.css";

export const Terminal = styled("section", {
  height: "100vh",

  flex: 1,
  display: "flex",
  flexDirection: "column",

  background: "$gray-700",
  borderRadius: "5px",
  overflow: "hidden",

  header: {
    background: "$gray-600",
    padding: "20px",

    display: "flex",
    gap: "10px",

    div: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: "#FC615D",

      "&:nth-child(2)": {
        background: "#FDBC40",
      },

      "&:nth-child(3)": {
        background: "#34C84A",
      },
    },
  },

  section: {
    ...scrollStyled,
    overflow: "auto",

    flex: 1,
    padding: "20px",

    code: {
      display: "flex",
      alignItems: "center",
      gap: "5px",

      fontSize: "20px",
      span: {
        color: "white",
      },

      ul: {
        color: "$gray-500",
      },

      stop: {
        fontSize: "$ultra-small",
        color: "#FF655B",
      },
    },
  },

  data: {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",

    gap: "10px",

    input: {
      fontSize: "20px",
      width: "100%",
      background: "transparent",
      color: "white",
    },
    padding: "0 20px 20px 20px",
  },
});

export const PlataformTrigger = styled(Accordion.Trigger, {
  position: "relative",
  background: "$gray-800",
  padding: "25px 18px",

  display: "flex",
  justifyContent: "space-between",

  borderRadius: "5px",

  '[data-state="open"] &': {
    borderRadius: "5px 5px 0px 0px",

    ".CaretUp": {
      transform: "rotate(180deg)",
    },
  },

  ul: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",

    gap: "10px",

    span: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "150%",
    },
  },

  ".CaretUp": {
    transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    color: "$blue-700",
  },
});

export const PlataformContent = styled(Accordion.Content, {
  userSelect: "none",
  background: "$gray-800",
  gap: "10px",
  borderRadius: "0px 0px 5px 5px",

  display: "flex",
  flexDirection: "column",

  span: {
    fontWeight: 500,
    fontSize: "16px",
  },

  '[data-state="open"] &': {
    padding: "10px",
  },

  "> div": {
    maxWidth: "none",
    width: "100%",

    input: {
      padding: "15px",

      "&:not(:focus)": {
        filter: "blur(4px)",
        border: 0,
      },
    },

    svg: {
      color: "$blue-700",
    },
  },
});

export const Plataform = styled(Accordion.Root, {
  display: "flex",
  flexDirection: "column",

  gap: "10px",
});
