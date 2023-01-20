import { Container } from "./styled.css";
import { Perfil } from "./components/Perfil";
import { Config } from "./components/Config";
import { NextSeo } from "next-seo";
import { useAuth } from "@src/hooks/useAuth";

export default function Me() {
  const { user } = useAuth();
  return (
    <>
      <NextSeo title={`${user ? `${user.name} - ` : ""} Fivem Shop`} />
      <Container>
        <section>
          <h1>Minha conta</h1>

          <section>
            <Perfil />
            <Config />
          </section>
        </section>
      </Container>
    </>
  );
}
