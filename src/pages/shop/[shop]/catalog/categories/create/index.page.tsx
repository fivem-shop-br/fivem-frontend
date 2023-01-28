import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import { ShopProps } from "../../../index.page";
import { Container } from "../../../styled.css";
import { Area, Header } from "../../styles.css";
import * as Input from "@fivem-shop/react";
import { Button } from "@fivem-shop/react";
import { Tag } from "phosphor-react";
export default function CreateCategorie({ shopId }: ShopProps) {
  return (
    <SideBar path="/catalog" shopId={shopId} overflow={true}>
      <Container>
        <Header>
          <h1>Criar Categoria</h1>
        </Header>
        <Area overflow>
          <section>
            <label>Nome</label>
            <Input.Root>
              <Input.Icon>
                <Tag size={22} />
              </Input.Icon>
              <Input.Input
                type="text"
                placeholder="Nome da categoria"
                autoFocus
              />
            </Input.Root>
          </section>
          <Button mode="primary" disabled>
            Finalizar Categoria
          </Button>
        </Area>
      </Container>
    </SideBar>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { shop },
}) => {
  return {
    props: {
      shopId: shop,
    },
  };
};
