import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import { ShopProps } from "../../../index.page";
import { Container } from "../../../styled.css";
import { Area, Header, InputFile, Inputs } from "../../styles.css";
import * as Input from "@fivem-shop/react";
import { Button } from "@fivem-shop/react";
import { CurrencyDollarSimple, FileImage, Package, Tag } from "phosphor-react";

export default function CreateProduct({ shopId }: ShopProps) {
  return (
    <SideBar path="/catalog" shopId={shopId} overflow={true}>
      <Container>
        <Header>
          <h1>Criar Produto</h1>
        </Header>
        <Area overflow>
          <Inputs>
            <section>
              <label>Categoria</label>
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
            <section>
              <label>Nome</label>
              <Input.Root>
                <Input.Icon>
                  <Package size={22} />
                </Input.Icon>
                <Input.Input type="text" placeholder="Nome da produto" />
              </Input.Root>
            </section>
            <section>
              <label>Preço</label>
              <Input.Root>
                <Input.Icon>
                  <CurrencyDollarSimple size={22} />
                </Input.Icon>
                <Input.Input type="text" placeholder="Preço do produto" />
              </Input.Root>
            </section>

            <InputFile>
              <label>Imagens</label>
              <div>
                <input type="file" id="uploadFile" />
                <label htmlFor="uploadFile">
                  <FileImage size={32} />
                </label>
              </div>
            </InputFile>
          </Inputs>
          <Button mode="primary" disabled>
            Finalizar Produto
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
