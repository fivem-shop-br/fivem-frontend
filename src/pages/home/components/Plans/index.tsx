import { HomeProps } from "@src/pages/index.page";
import { Card } from "./components/Card";
import { Container } from "./styled.css";
import { animateChildren } from "@src/utils/animate";
import { useEffect } from "react";
import Aos from "aos";

export function Plans({ plans }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Container id="plans" {...animateChildren}>
      <div data-aos="fade-top">
        <h1>
          Os melhores preços <br /> para sua <span>carteira</span>.
        </h1>
        <p>
          Crie sua loja em minutos e começe faturar. Escolha <br /> seu plano e
          vamos lá!
        </p>
      </div>
      <Card plans={plans} />
    </Container>
  );
}
