import { Button } from "@fivem-shop/react";
import { Separator, Topic, Config as ConfigS } from "../styled.css";

const buttonCss = { height: "45px", fontWeight: 500, padding: "12px 30px" };

export function Config() {
  return (
    <ConfigS>
      <Separator />
      <Topic>
        <ul>
          <h2>SENHA E AUTENTICAÇÃO</h2>
          <p>Deseja trocar sua senha? Atualize sua senha agora</p>
        </ul>
        <div>
          <Button mode="primary" css={buttonCss}>
            Mudar senha
          </Button>
        </div>
      </Topic>
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
            css={buttonCss}
            backgroundColor="#E8564D"
            hoverColor="#F87168"
          >
            Desativar conta
          </Button>
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
    </ConfigS>
  );
}
