import Image from "next/image";
import { Button } from "@fivem-shop/react";
import { Main } from "./styles.css";

import Apresentation from "@src/source/apresentation.png";
import {
  animate,
  animateProvider,
  animateChildren,
} from "@src/styles/animate.css";

export default function Home() {
  return (
    <Main {...animateProvider}>
      <animate.section>
        <animate.h1 {...animateChildren}>Faça sua Loja</animate.h1>
        <animate.span {...animateChildren}>para Fivem</animate.span>
        <animate.p {...animateChildren}>
          Crie sua loja em minutos e começe faturar. Escolha <br /> seu plano e
          vamos lá!
        </animate.p>
        <animate.div {...animateChildren}>
          <Button mode="primary" size="medium">
            PLANOS
          </Button>
          <Button mode="secondary" size="medium">
            REGISTRAR CONTA
          </Button>
        </animate.div>
      </animate.section>

      <animate.ul {...animateChildren}>
        <Image src={Apresentation} alt="Apresentação" quality={100} />
      </animate.ul>
    </Main>
  );
}
