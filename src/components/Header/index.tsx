import Link from "next/link";
import Image from "next/image";
import Logo from "@src/source/logo.svg";
import { Container } from "./styles.css";
import { NavBar } from "./components/NavBar";
import { useScroll } from "@src/hooks/useScroll";

export function Header() {
  const { isScrolled } = useScroll();

  return (
    <Container scrolled={isScrolled}>
      <section>
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
        <NavBar />
      </section>
    </Container>
  );
}
