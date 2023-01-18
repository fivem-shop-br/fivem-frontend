import { useAuth } from "@src/hooks/useAuth";
import Skeleton from "react-loading-skeleton";
import { Image, Perfil as PerfilS } from "../styled.css";
import PerfilI from "@src/source/perfil.png";
import { Button } from "@fivem-shop/react";
export function Perfil() {
  const { user } = useAuth();
  const ImageStyle = {
    backgroundImage: `url(${user?.image ? user?.image : PerfilI.src})`,
  };
  return (
    <PerfilS>
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
            <Skeleton width={240} height={25} style={{ marginTop: "10px" }} />
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
    </PerfilS>
  );
}
