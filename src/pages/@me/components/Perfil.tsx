import PerfilI from "@src/source/perfil.png";
import { useAuth } from "@src/hooks/useAuth";
import { Image, Perfil as PerfilS } from "../styled.css";
import { Skeleton } from "@src/components/Skeleton";
import { EditProfile } from "./Buttons/edit-profile";

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

      <EditProfile />
    </PerfilS>
  );
}
