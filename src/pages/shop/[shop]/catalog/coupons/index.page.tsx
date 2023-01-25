import { Button } from "@fivem-shop/react";
import { buttonCss } from "@src/pages/@me/components/Config";
import { SideBar } from "@src/pages/shop/components/Sidebar";
import { Plus, Ticket } from "phosphor-react";
import { Container } from "../../styled.css";
import { Area, Header } from "../styles.css";

export default function Coupons() {
  return (
    <SideBar path="/catalog">
      <Container>
        <Header>
          <h1>Todos Cupons</h1>

          <Button mode="primary" css={buttonCss}>
            <Plus weight="bold" size={22} />
            Adicionar Cupon
          </Button>
        </Header>
        <Area>
          <div>
            <Ticket size={50} />
            <ul>
              <h2>Você ainda não tem cupons</h2>
              <span>Você pode adicionar itens, e todas aparecerão aqui!</span>
            </ul>
          </div>
        </Area>
      </Container>
    </SideBar>
  );
}
