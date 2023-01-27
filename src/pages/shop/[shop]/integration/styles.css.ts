import { styled } from "@fivem-shop/react";
import { scrollStyled } from "@src/styles/global.css";

export const Terminal = styled("section", {
  maxHeight: "78.3vh",

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
