import { Container } from "./styled.css";
import { Perfil } from "./components/Perfil";
import { Config } from "./components/Config";

export default function Me() {
  return (
    <Container>
      <section>
        <h1>Minha conta</h1>

        <section>
          <Perfil />
          <Config />
        </section>
      </section>
    </Container>
  );
}
