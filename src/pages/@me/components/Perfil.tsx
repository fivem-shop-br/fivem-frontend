import PerfilI from "@src/source/perfil.png";
import { useAuth } from "@src/hooks/useAuth";
import { Button } from "@fivem-shop/react";
import { Image, Perfil as PerfilS } from "../styled.css";
import { Skeleton } from "@src/components/Skeleton";

export function Perfil() {
  const { user } = useAuth();
  const ImageStyle = {
    backgroundImage: `url(${user?.image ? user?.image : PerfilI.src})`,
  };

  return (
    <PerfilS>
      <div>
        <Skeleton state={user?.email} width={75} height={75} circle>
          <Image css={ImageStyle} />
        </Skeleton>
        <ul>
          <Skeleton
            state={user?.name}
            width={240}
            height={25}
            style={{ marginTop: "10px" }}
          >
            <h3>{user?.name}</h3>
          </Skeleton>

          <Skeleton state={user?.email} width={182} height={20}>
            <span>{user?.email}</span>
          </Skeleton>
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
    </PerfilS>
  );
}
