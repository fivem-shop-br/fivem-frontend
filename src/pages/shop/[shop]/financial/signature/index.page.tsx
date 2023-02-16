import { SideBar } from "@src/pages/shop/components/Sidebar";
import { NextSeo } from "next-seo";
import { ShopProps } from "../../index.page";

export default function Signature({ shop_slug }: ShopProps) {
  return (<>
  <NextSeo title="Assinatura - Fivem Shop" />
    <SideBar path="/financial" shopId={shop_slug}>
      Signature
    </SideBar>
  </>
  );
}
