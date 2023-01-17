export { motion as animate } from "framer-motion";
import type { Variants } from "framer-motion";
export const animateProvider = {
  initial: "hidden",
  animate: "visible",
  variants: {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        delayChildren: 0.25,
        staggerChildren: 0.25,
      },
    },
  } as Variants,
};

export const animateChildren = {
  variants: {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.05, 0, 0, 0.05],
      },
    },
  } as Variants,
};
