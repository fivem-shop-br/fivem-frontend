import PerfilI from "@src/source/perfil.png";
import { useAuth } from "@src/hooks/useAuth";
import {
  Container,
  Image,
  Perfil,
  Config,
  Separator,
  Topic,
} from "./styled.css";
import { Button } from "@fivem-shop/react";
import Skeleton from "react-loading-skeleton";

const buttonCss = { height: "45px", fontWeight: 500, padding: "12px 30px" };

export default function Me() {
  const { user } = useAuth();
  const ImageStyle = {
    backgroundImage: `url(${user?.image ? user?.image : PerfilI.src})`,
  };

  return (
    <Container>
      <section>
        <h1>Minha conta</h1>

        <section>
          <Perfil>
            <div>
              {user?.email ? (
                <Image css={ImageStyle} />
              ) : (
                <Skeleton width={75} height={75} circle />
              )}
              <ul>
                {user?.name ? (
                  <h3>{user?.name}</h3>
                ) : (
                  <Skeleton
                    width={240}
                    height={25}
                    style={{ marginTop: "10px" }}
                  />
                )}
                {user?.email ? (
                  <span>{user?.email}</span>
                ) : (
                  <Skeleton width={182} height={20} />
                )}
              </ul>
            </div>

            <Button
              mode="secondary"
              hoverColor="$gray-500"
              backgroundColor="$gray-600"
              css={{ height: "45px" }}
            >
              Editar
            </Button>
          </Perfil>
          <Config>
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
                  Para um melhor experiência, verifique seu email e podera ter
                  acesso a toda plataforma.
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
                  Desativar sua conta significa que você poderá recuperá-la
                  quando quiser.
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
          </Config>
        </section>
      </section>
    </Container>
  );
}
