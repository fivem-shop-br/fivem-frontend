import Image from "next/image";
import Link from "next/link";
import { Button } from "@fivem-shop/react";
import { Container } from "./styles.css";

import Logo from "@src/source/logo.svg";
import { useScroll } from "@src/hooks/useScroll";
import { User } from "phosphor-react";

export function Header() {
  const { isScrolled } = useScroll();

  return (
    <Container scrolled={isScrolled}>
      <section>
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
        <nav>
          <a href="">RECURSOS</a>
          <a href="">STATUS</a>
          <a href="">SOBRE</a>
          <div>
            <Button mode="primary">PLANOS</Button>
            <Button
              mode="secondary"
              hoverColor="$gray-500"
              backgroundColor="$gray-600"
            >
              <User weight="bold" />
              LOGIN
            </Button>
          </div>
        </nav>
      </section>
    </Container>
  );
}
