import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import { ShopProps } from "../../../index.page";
import { Container } from "../../../styled.css";
import { Area, Header, Inputs } from "../../styles.css";
import * as Input from "@fivem-shop/react";
import { Button } from "@fivem-shop/react";
import { Barcode, Percent } from "phosphor-react";
import { buttonCss } from "@src/pages/@me/components/Config";
export default function Categories({ shopId }: ShopProps) {
  return (
    <SideBar path="/catalog" shopId={shopId} overflow={true}>
      <Container>
        <Header>
          <h1>Criar Cupon</h1>
        </Header>
        <Area overflow>
          <Inputs>
            <section>
              <label>Código</label>
              <Input.Root>
                <Input.Icon>
                  <Barcode size={22} />
                </Input.Icon>
                <Input.Input
                  type="text"
                  placeholder="Código do cupon"
                  autoFocus
                />
              </Input.Root>
            </section>
            <section>
              <label>Valor (%)</label>
              <Input.Root>
                <Input.Icon>
                  <Percent size={22} />
                </Input.Icon>
                <Input.Input type="text" placeholder="Valor em porcentagem" />
              </Input.Root>
            </section>
          </Inputs>
          <Button mode="primary" css={buttonCss} disabled>
            Finalizar Cupon
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
