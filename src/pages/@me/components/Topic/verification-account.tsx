import { Button } from "@fivem-shop/react";
import { Separator, Topic } from "../../styled.css";
import { buttonCss } from "../Config";

export function VerificationAccount() {
  return (
    <>
      <Separator />
      <Topic>
        <ul>
          <h2>VERIFICAÇÃO DE CONTA</h2>
          <p>
            Para um melhor experiência, verifique seu email e podera ter acesso
            a toda plataforma.
          </p>
        </ul>
        <div>
          <Button mode="primary" css={buttonCss}>
            Verificar email
          </Button>
        </div>
      </Topic>
    </>
  );
}
