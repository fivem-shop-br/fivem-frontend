import { Skeleton } from "@src/components/Skeleton";
import { getShop } from "@src/services/queries";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { ShopsProps } from "../../index.page";
import { Image } from "../../styled.css";
import { Menu } from "./components/Menu";
import {
  Container,
  SideBarContainer,
  Shop,
  Liner,
  Children,
} from "./styles.css";

export interface SideBarProps {
  children: React.ReactNode;
  path?: string;
  shopId: string;
  overflow?: boolean;
}

export function SideBar({
  overflow,
  shopId,
  children,
  path,
}: SideBarProps) {
  const { push } = useRouter();
  const { data, isError } = useQuery<ShopsProps>("shop" + shopId, () => {
    return getShop(shopId);
  });

  const ImageStyle = {
    backgroundImage: `url(${data?.logo})`,
  };

  useEffect(() => {
    if (isError) push("/shop");
  }, [isError]);

  return (
    <Container>
      <SideBarContainer>
        <Shop>
          <div>
            <Image css={ImageStyle} />
            <ul>
              <Skeleton state={data?.name} width="150px" height="15px">
                <h3>{data?.name}</h3>
              </Skeleton>
              <Skeleton
                state={data?.domain}
                height="10px"
                style={{ marginTop: "4px" }}
              >
                <span>{data?.domain}</span>
              </Skeleton>
            </ul>
          </div>
        </Shop>
        <Liner />
        <Menu defaultPath={path} />
      </SideBarContainer>
      <Children overflow={overflow}>{children}</Children>
    </Container>
  );
}
