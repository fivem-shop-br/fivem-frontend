import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { ShopProps } from "../../index.page";

export default function Theme({ shop_slug }: ShopProps) {
  return (
    <>
      <NextSeo title="Dashboard - Fivem Shop" />
      <SideBar path="/settings" shopId={shop_slug}>
        <h1>Theme</h1>
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
