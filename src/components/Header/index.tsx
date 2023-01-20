import Link from "next/link";
import Image from "next/image";
import Logo from "@src/source/logo.svg";
import { useRef, useState } from "react";
import { Container } from "./styles.css";
import { List, X } from "phosphor-react";
import { NavBar } from "./components/NavBar";
import { useScroll } from "@src/hooks/useScroll";
import { useOutsideClick } from "@src/hooks/useOutsideClick";

const mobileNavIconStyled: React.CSSProperties = {
  position: "absolute",
  right: "0",
  top: "15px",
  flex: 1,
};

export function Header() {
  const NavRef = useRef(null);
  const { isScrolled } = useScroll();
  const [mobileNav, setMobileNav] = useState(false);

  function handleMobileNav() {
    setMobileNav((state) => !state);
  }

  useOutsideClick(NavRef, () => {
    setMobileNav(false);
  });

  const MobileNavIcon = mobileNav ? X : List;

  return (
    <Container scrolled={isScrolled} mobileNav={mobileNav}>
      <section ref={NavRef}>
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
        <NavBar />
        <MobileNavIcon
          size={24}
          style={mobileNavIconStyled}
          onClick={handleMobileNav}
        />
      </section>
    </Container>
  );
}
