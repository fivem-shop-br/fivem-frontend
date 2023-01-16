import { stats, statsProps } from "./config";
import { Main } from "./styles.css";
import { animate, animateChildren } from "@src/utils/animate";

export function Band() {
  return (
    <Main id="band">
      {stats.map((index: statsProps) => (
        <animate.div key={index.title}>
          <animate.h1 {...animateChildren}>
            <animate.span>+</animate.span> {index.quantity}
          </animate.h1>
          <animate.span {...animateChildren}>{index.title}</animate.span>
        </animate.div>
      ))}
    </Main>
  );
}
