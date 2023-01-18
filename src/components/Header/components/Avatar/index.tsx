import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import Perfil from "@src/source/perfil.png";
import { Button } from "@fivem-shop/react";
import { useAuth } from "@src/hooks/useAuth";
import { ShoppingCart, User, XCircle } from "phosphor-react";
import { Arrow, Container, Content } from "./styles.css";
import { useState } from "react";

const docsButtonCss = {
  border: "1px solid $blue-700",
  background: "none",
  padding: "12px 20px",
  fontSize: "14px",
};

export function Avatar() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <Popover.Root onOpenChange={setOpen} open={open}>
      <Popover.Trigger asChild>
        <Container
          css={{
            backgroundImage: `url(${user?.image ? user?.image : Perfil.src})`,
          }}
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Content>
          <Link href="/@me" onClick={handleOpen}>
            <User size={22} />
            <span>Meu perfil</span>
          </Link>
          <a>
            <ShoppingCart size={24} />
            <span>Minhas Lojas</span>
          </a>
          <a onClick={signOut}>
            <XCircle size={24} />
            <span>Desconectar</span>
          </a>

          <Button mode="primary" css={docsButtonCss}>
            DOCUMENTAÇÃO
          </Button>
          <Arrow />
        </Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
