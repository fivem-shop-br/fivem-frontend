import { NextSeo } from "next-seo";
import { Main } from "./styles.css";
import { Band } from "./components/Band";
import { animateProvider } from "@src/utils/animate";
import { Apresation } from "./components/Apresentation";
import { SlideContainer } from "./components/Slide/slide-container";

export interface HomeProps {
  plans?: [
    {
      id: string;
      title: string;
      price: string;
      time: string;
      benefits: {
        list: Array<string>;
      };
    }
  ];
  sliders?: [
    {
      id: string;
      types?: "feature" | "fixed";
      title: string;
      subtitle: string;
      description: string;
      image: {
        url: string;
      };
    }
  ];
}

export default function Home({ sliders }: HomeProps) {
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
      </Main>
    </>
  );
}
