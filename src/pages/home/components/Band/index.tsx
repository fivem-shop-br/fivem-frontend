import { stats, statsProps } from "./config";
import { Main } from "./styles.css";
import { animate } from "@src/utils/animate";
import aos from "aos";
import { useEffect } from "react";

export function Band() {
  useEffect(() => {
    aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Main id="band" data-aos="fade-right">
      {stats.map((index: statsProps) => (
        <animate.div key={index.title} data-aos="fade-right">
          <animate.h1 data-aos="fade-right">
            <animate.span>+</animate.span> {index.quantity}
          </animate.h1>
          <animate.span>{index.title}</animate.span>
        </animate.div>
      ))}
    </Main>
  );
}
