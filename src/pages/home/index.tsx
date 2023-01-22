import { NextSeo } from "next-seo";
import { Main } from "./styles.css";
import { Band } from "./components/Band";
import { animateProvider } from "@src/utils/animate";
import { Apresation } from "./components/Apresentation";
import { SlideContainer } from "./components/Slide/slide-container";
import { HomeProps } from "../index.page";
import { Plans } from "./components/Plans";

export default function Home({ sliders, plans }: HomeProps) {
  return (
    <>
      <NextSeo
        title="Fivem Shop | A sua loja aqui"
        description="Deseja criar seu site, para seu servidor? aqui estamos FIVEM SHOP! um provedor renomado ao seu dispor."
      />
      <Main {...animateProvider}>
        <Apresation />
        <SlideContainer sliders={sliders} />
        <Band />
        <Plans plans={plans} />
      </Main>
    </>
  );
}
