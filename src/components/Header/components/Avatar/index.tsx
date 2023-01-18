import { Button } from "@fivem-shop/react";
import * as Popover from "@radix-ui/react-popover";
import { useAuth } from "@src/hooks/useAuth";
import { ShoppingCart, User, XCircle } from "phosphor-react";
import { Arrow, Container, Content } from "./styles.css";

const docsButtonCss = {
  border: "1px solid $blue-700",
  background: "none",
  padding: "12px 20px",
  fontSize: "14px",
};

export function Avatar() {
  const { signOut } = useAuth();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Container />
      </Popover.Trigger>
      <Popover.Portal>
        <Content>
          <a>
            <User size={22} />
            <span>Meu perfil</span>
          </a>
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
