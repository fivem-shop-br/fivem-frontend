import Link from "next/link";
import Image from "next/image";
import Apresentation from "@src/source/apresentation.png";
import { animate, animateChildren } from "@src/utils/animate";
import { Main } from "./styles.css";
import { Button } from "@fivem-shop/react";

export function Apresation() {
  return (
    <Main>
      <animate.section>
        <animate.h1 {...animateChildren}>Faça sua Loja</animate.h1>
        <animate.span {...animateChildren}>para Fivem</animate.span>
        <animate.p {...animateChildren}>
          Crie sua loja em minutos e começe faturar. Escolha <br /> seu plano e
          vamos lá!
        </animate.p>
        <animate.div {...animateChildren}>
          <Button mode="primary" size="medium" asChild>
            <a href="#">PLANOS</a>
          </Button>
          <Button mode="secondary" size="medium">
            <Link href="/">REGISTRAR CONTA</Link>
          </Button>
        </animate.div>
      </animate.section>

      <animate.ul {...animateChildren}>
        <Image src={Apresentation} alt="Apresentação" quality={100} />
      </animate.ul>
    </Main>
  );
}
