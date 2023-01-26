import { SideBar } from "@src/pages/shop/components/Sidebar";
import { ShopProps } from "../../index.page";

export default function Signature({ shopId }: ShopProps) {
  return (
    <SideBar path="/financial" shopId={shopId}>
      Signature
    </SideBar>
  );
}
