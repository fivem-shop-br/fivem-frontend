import { Skeleton } from "@src/components/Skeleton";
import { useAuth } from "@src/hooks/useAuth";
import { SideBar } from "../components/Sidebar";
import { Container, Sales, Statistics, Stats } from "./styled.css";
import { ClipboardText, Tag } from "phosphor-react";
import { GetServerSideProps } from "next";

export interface ShopProps {
  shop_slug: string;
}

export default function Shop({ shop_slug }: ShopProps) {
  const { user } = useAuth();

  return (
    <SideBar shopId={shop_slug}>
      <Container>
        <ul>
          <Skeleton state={user?.name} width="500px" height="40px">
            <h1>Bem vindo, {user?.name}</h1>
          </Skeleton>
          <Skeleton state={user?.name} width="300px">
            <h6>é um prazer te ver aqui novamente!</h6>
          </Skeleton>
        </ul>

        <Statistics>
          <Stats>
            <div>
              <data>
                <Tag size={16} weight="fill" />
              </data>
              <span>Total Vendas</span>
            </div>

            <ul>
              <Skeleton
                state={user?.name}
                width="130px"
                height="20px"
                theme="white"
              >
                <h2>R$5244,20</h2>
              </Skeleton>
              <span>Valor do mês atual.</span>
            </ul>
          </Stats>
          <Stats secondary>
            <div>
              <data>
                <Tag size={16} weight="fill" />
              </data>
              <span>Total Vendas</span>
            </div>

            <ul>
              <Skeleton state={user?.name} width="130px" height="20px">
                <h2>R$0,00</h2>
              </Skeleton>
              <span>Valor do mês atual.</span>
            </ul>
          </Stats>
          <Stats secondary>
            <div>
              <data>
                <Tag size={16} weight="fill" />
              </data>
              <span>Total Vendas</span>
            </div>

            <ul>
              <Skeleton state={user?.name} width="130px" height="20px">
                <h2>R$0,00</h2>
              </Skeleton>
              <span>Valor do mês atual.</span>
            </ul>
          </Stats>
        </Statistics>
        <Sales>
          <div>
            <ClipboardText size={50} />
            <ul>
              <h2>Você ainda não tem vendas</h2>
              <span>Faça sua primeira venda, e todas aparecerão aqui!</span>
            </ul>
          </div>
        </Sales>
      </Container>
    </SideBar>
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
