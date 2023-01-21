import * as Dialog from "@radix-ui/react-dialog";
import { keyframes, styled } from "@fivem-shop/react";

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: "translate(-50%, -48%) scale(0.70)",
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
});

export const DialogOverlay = styled("div", {
  backgroundColor: "rgba(0,0,0, 0.5)",
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  zIndex: 3,
});

export const DialogContent = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  animation: `${contentShow} 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 4,

  "> section": {
    background: "$gray-700",
    padding: "35px 25px",
    gap: "20px",

    display: "flex",
    flexDirection: "column",
    borderRadius: "10px 10px 0px 0px",
  },
});

export const DialogHeader = styled("header", {
  position: "relative",
  display: "flex",
  gap: "19px",
  justifyContent: "space-between",
  textAlign: "center",

  h1: {
    fontWeight: 700,
    fontSize: "24px",
  },

  span: {
    fontWeight: 400,
    fontSize: "16px",
    color: "$gray-500",
  },

  "> svg": {
    top: "-20px",
    left: "-10px",
    position: "absolute",
    cursor: "pointer",
  },
});

export const DialogInput = styled("section", {
  div: {
    background: "$gray-900",
    border: "1.5px solid $gray-900",

    input: {
      padding: "10px",
    },
  },

  label: {
    marginTop: "5px",
    fontWeight: 600,
    fontSize: "14px",
  },
});

export const DialogFooter = styled("footer", {
  display: "flex",
  justifyContent: "flex-end",

  background: "#242730",
  borderRadius: "0px 0px 10px 10px",
  padding: "10px 12px",
});

export const DialogProfile = styled("div", {
  position: "relative",

  width: "75px",
  height: "75px",
  borderRadius: "999px",
  background: "#2D3439",

  backgroundSize: "cover",

  margin: "auto",
  display: "flex",
  textAlign: "center",

  cursor: "pointer",

  "&:hover": {
    "&::before": {
      content: "",
      background: "rgba(0,0,0, 0.45)",
      padding: "1px 74px 51px 1px",

      borderRadius: "50%",
    },

    "&::after": {
      position: "absolute",
      top: "27px",

      content: "MUDAR AVATAR",
      lineHeight: "100%",

      fontWeight: 600,
      fontSize: "10px",
    },
  },

  section: {
    position: "absolute",
    right: 0,
    bottom: 0,

    width: "30px",
    height: "30px",
    background: "$gray-700",

    borderRadius: "50%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    div: {
      width: "20px",
      height: "20px",
      background: "$blue-700",

      borderRadius: "50%",
    },
  },
});
