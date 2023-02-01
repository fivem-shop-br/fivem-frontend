import { Button } from "@fivem-shop/react";
import { buttonCss } from "@src/pages/@me/components/Config";
import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Plus, Ticket } from "phosphor-react";
import { ShopProps } from "../../index.page";
import { Container } from "../../styled.css";
import { Area, Header } from "../styles.css";

export default function CreateCoupons({ shopId }: ShopProps) {
  const router = useRouter();
  return (
    <SideBar path="/catalog" shopId={shopId}>
      <Container>
        <Header>
          <h1>Todos Cupons</h1>

          <Button
            mode="primary"
            css={{ ...buttonCss, textDecoration: "none" }}
            asChild
          >
            <Link href={`${router.asPath}/create`}>
              <Plus weight="bold" size={22} />
              Adicionar Cupon
            </Link>
          </Button>
        </Header>
        <Area>
          <div>
            <Ticket size={50} />
            <ul>
              <h2>Você ainda não tem cupons</h2>
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
      shop_slug: shop,
    },
  };
};
