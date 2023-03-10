import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { ShopProps } from "../../index.page";

export default function General({ shop_slug }: ShopProps) {
  return (
    <>
      <NextSeo title="Dashboard - Fivem Shop" />
      <SideBar path="/settings" shopId={shop_slug}>
        <h1>General</h1>
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
