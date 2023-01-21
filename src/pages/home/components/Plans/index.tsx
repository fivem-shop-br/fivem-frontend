import { HomeProps } from "@src/pages/index.page";
import { Card } from "./components/Card";
import { Container } from "./styled.css";

export function Plans({ plans }: HomeProps) {
  return (
    <Container id="plans">
      <div>
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
