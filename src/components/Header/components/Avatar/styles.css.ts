import * as Popover from "@radix-ui/react-popover";
import { styled } from "@fivem-shop/react";

export const Content = styled(Popover.Content, {
  display: "flex",
  flexDirection: "column",

  borderRadius: "8px",
  background: "$gray-700",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",

  marginRight: "40px",
  padding: "20px",
  gap: "15px",

  a: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",

    svg: {
      color: "$blue-700",
    },

    h2: {
      fontWeight: 400,
      fontSize: "15px",
    },
  },
  zIndex: 11,
});

export const Container = styled("div", {
  width: "45px",
  height: "45px",
  borderRadius: "999px",
  background: "#2D3439",

  cursor: "pointer",
  backgroundSize: "cover",
  backgroundImage:
    "url(https://cdn.discordapp.com/attachments/1045873278901833788/1049105422394597536/wP0xXdbYgeWyVAAAAAElFTkSuQmCC.png)",
});

export const Arrow = styled(Popover.Arrow, {
  fill: "$gray-700",
  height: "10px",
  width: "10px",
});
