import Link from "next/link";
import { Button } from "@fivem-shop/react";
import { buttonCss } from "@src/pages/@me/components/Config";
import { Image, Shop as ShopS } from "../../styled.css";

interface ShopProps {
  slug: string;
  name: string;
  domain: string;
  image: string;
}

export function Shop({ slug, name, domain, image }: ShopProps) {
  const ImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <ShopS>
      <div>
        <Image css={ImageStyle} />
        <ul>
          <h3>{name}</h3>
          <span>{domain}</span>
        </ul>
      </div>
      <Button
        mode="primary"
        css={{ ...buttonCss, textDecoration: "none" }}
        asChild
      >
        <Link href={`shop/${slug}`}>Gerenciar</Link>
      </Button>
    </ShopS>
  );
}
