import { Layout } from "@src/components/Layout";
import { useAuth } from "@src/hooks/useAuth";
import { NextSeo } from "next-seo";
import { Shop } from "./components/shop";
import { ShopSkeleton } from "./components/shop-skeleton";
import { Container } from "./styled.css";

export default function Shops() {
  const { loading } = useAuth();

  return (
    <Layout>
      <NextSeo title="Minhas Lojas - Fivem Shop" />
      <Container>
        {!loading ? (
          <Shop />
        ) : (
          [...Array(8)].map((_, key) => <ShopSkeleton key={key} />)
        )}
      </Container>
    </Layout>
  );
}
