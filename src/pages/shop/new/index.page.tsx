import * as Input from "@fivem-shop/react";
import { Button } from "@fivem-shop/react";
import { ShoppingCartSimple } from "phosphor-react";
import { Container } from "./styled.css";

export default function New() {
  return (
    <Container>
      <ul>
        <span>Me conte mais sobre sua Loja</span>
        <h1>Configure sua Loja</h1>
      </ul>

      <section>
        <div>
          <label>
            Nome <span>*</span>
          </label>
          <Input.Root>
            <Input.Icon>
              <ShoppingCartSimple size={22} />
            </Input.Icon>
            <Input.Input
              type="text"
              placeholder="Digite nome da sua loja"
              autoFocus
            />
          </Input.Root>
        </div>

        <div>
          <Button mode="primary" hoverColor="#2DA845">
            Prosseguir para o pagamento
          </Button>
        </div>
      </section>
    </Container>
  );
}
