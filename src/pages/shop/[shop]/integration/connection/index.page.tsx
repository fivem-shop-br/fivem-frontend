import * as Accordion from "@radix-ui/react-accordion";
import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Header } from "../../catalog/styles.css";
import { ShopProps } from "../../index.page";
import { Container } from "../../styled.css";
import { Plataform, PlataformContent, PlataformTrigger } from "../styles.css";
import * as Input from "@fivem-shop/react";

import Fivem from "@src/source/fivem.svg";
import { ArrowsClockwise, CaretUp } from "phosphor-react";
import { Tooltip } from "@src/components/Tooltip";
import { NextSeo } from "next-seo";

export default function Commands({ shop_slug }: ShopProps) {
  return (
    <>
      <NextSeo title="Conexão - Fivem Shop" />
      <SideBar path="/integration" shopId={shop_slug}>
        <Container>
          <Header>
            <h1>Conectar com Plataformas</h1>
          </Header>

          <Plataform type="multiple">
            <Accordion.Item value="fivem">
              <PlataformTrigger asChild>
                <div>
                  <ul>
                    <Image src={Fivem} alt="Fivem Plataforma" />
                    <span>Fivem</span>
                  </ul>
                  <CaretUp size={32} className="CaretUp" />
                </div>
              </PlataformTrigger>
              <PlataformContent>
                <span>Token script</span>
                <Input.Root>
                  <Input.Input type="text" value="TOKEN-TEST" />
                  <Input.Icon position="right">
                    <Tooltip content="Gerar Token" backgroundColor="$blue-700">
                      <ArrowsClockwise size={22} />
                    </Tooltip>
                  </Input.Icon>
                </Input.Root>
              </PlataformContent>
            </Accordion.Item>
          </Plataform>
        </Container>
      </SideBar>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { shop },
}) => {
  return {
    props: {
      shop_slug: shop,
    },
  };
};
