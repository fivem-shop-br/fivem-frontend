import { styled } from "@fivem-shop/react";
import { motion } from "framer-motion";

export const Main = styled(motion.main, {
  ".swiper-pagination-bullet": {
    background: "$blue-700",
  },

  ".swiper-slide": {
    height: "auto !important",
  },
});
