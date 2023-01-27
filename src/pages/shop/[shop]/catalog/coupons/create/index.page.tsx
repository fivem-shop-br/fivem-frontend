import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import { ShopProps } from "../../../index.page";
import { Container } from "../../../styled.css";
import { Area, Header } from "../../styles.css";
import * as Input from "@fivem-shop/react";
import { Button } from "@fivem-shop/react";
export default function Categories({ shopId }: ShopProps) {
  return (
    <SideBar path="/catalog" shopId={shopId} overflow={true}>
      <Container>
        <Header>
          <h1>Criar Cupon</h1>
        </Header>
        <Area overflow>
          <section>
            <label>Nome</label>
            <Input.Root>
              <Input.Input
                type="text"
                placeholder="Nome da categoria"
                autoFocus
              />
            </Input.Root>
          </section>
          <Button mode="primary" disabled>
            Finalizar
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
