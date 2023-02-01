import { SideBar } from "@src/pages/shop/components/Sidebar";
import { ShopProps } from "../../index.page";

export default function Signature({ shop_slug }: ShopProps) {
  return (
    <SideBar path="/financial" shopId={shop_slug}>
      Signature
    </SideBar>
  );
}
