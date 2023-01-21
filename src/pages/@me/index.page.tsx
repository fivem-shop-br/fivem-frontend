import { Container } from "./styled.css";
import { Perfil } from "./components/Perfil";
import { Config } from "./components/Config";
import { NextSeo } from "next-seo";
import { useAuth } from "@src/hooks/useAuth";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookie = parseCookies(ctx);
  if (!cookie["fivem-shop.token"]) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
