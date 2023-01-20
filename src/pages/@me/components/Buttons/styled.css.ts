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
