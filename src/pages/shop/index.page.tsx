import { Layout } from "@src/components/Layout";
import { getShops } from "@src/services/queries";
import { NextSeo } from "next-seo";
import { useQuery } from "react-query";
import { Shop } from "./components/Shop/shop";
import { ShopSkeleton } from "./components/Shop/shop-skeleton";
import { Container } from "./styled.css";

export interface ShopsProps {
  id: string;
  owner_id: string;
  slug: string;
  name: string;
  description?: string;
  logo?: string;
  banner?: string;
  favicon?: string;
  primary_color?: string;
  secondary_color?: string;
  domain: string;
  plan: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function Shops() {
  const { data, isLoading } = useQuery<ShopsProps[]>("shops", getShops);

  return (
    <Layout>
      <NextSeo title="Minhas Lojas - Fivem Shop" />
      <Container>
        {!isLoading
          ? data &&
            data.map(({ slug, name, domain, logo: image }, key) => (
              <Shop
                slug={slug}
                name={name}
                domain={domain}
                image={image!}
                key={key}
              />
            ))
          : [...Array(8)].map((_, key) => <ShopSkeleton key={key} />)}
      </Container>
    </Layout>
  );
}
