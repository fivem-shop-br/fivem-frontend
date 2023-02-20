import { Button } from "@fivem-shop/react";
import { Separator, Topic } from "../../styled.css";
import { buttonCss } from "../Config";

export function RemovedAccount() {
  return (
    <>
      <Separator />
      <Topic>
        <ul>
          <h2>REMOÇÃO DE CONTA</h2>
          <p>
            Desativar sua conta significa que você poderá recuperá-la quando
            quiser.
          </p>
        </ul>
        <div>
          <Button
            mode="primary"
            hoverColor="#E8564D"
            css={{
              ...buttonCss,
              background: "none",
              border: "1px solid #E8564D",
            }}
          >
            Excluir conta
          </Button>
        </div>
      </Topic>
    </>
  );
}
