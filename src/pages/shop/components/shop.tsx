import { Button } from "@fivem-shop/react";
import { buttonCss } from "@src/pages/@me/components/Config";
import { Image, Shop as ShopS } from "../styled.css";

export function Shop() {
  return (
    <ShopS>
      <div>
        <Image />
        <ul>
          <h3>Vice City</h3>
          <span>seunome.fivem-shop.com.br</span>
        </ul>
      </div>
      <Button mode="primary" css={buttonCss}>
        Gerenciar
      </Button>
    </ShopS>
  );
}
