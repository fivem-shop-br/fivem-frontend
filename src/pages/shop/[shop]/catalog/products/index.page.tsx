import { Button } from "@fivem-shop/react";
import { buttonCss } from "@src/pages/@me/components/Config";
import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import { Package, Plus } from "phosphor-react";
import { ShopProps } from "../../index.page";
import { Container } from "../../styled.css";
import { Area, Header } from "../styles.css";

export default function Produtos({ shopId }: ShopProps) {
  return (
    <SideBar path="/catalog" shopId={shopId}>
      <Container>
        <Header>
          <h1>Todos Produtos</h1>

          <Button mode="primary" css={buttonCss}>
            <Plus weight="bold" size={22} />
            Adicionar Produto
          </Button>
        </Header>
        <Area>
          <div>
            <Package size={50} />
            <ul>
              <h2>Você ainda não tem produtos</h2>
              <span>Você pode adicionar itens, e todas aparecerão aqui!</span>
            </ul>
          </div>
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
