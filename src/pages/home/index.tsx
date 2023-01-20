import { Main } from "./styles.css";
import { Band } from "./components/Band";
import { animateProvider } from "@src/utils/animate";
import { Apresation } from "./components/Apresentation";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Fivem Shop | A sua loja aqui"
        description="Deseja criar seu site, para seu servidor? aqui estamos FIVEM SHOP! um provedor renomado ao seu dispor."
      />
      <Main {...animateProvider}>
        <Apresation />
        <Band />
      </Main>
    </>
  );
}
