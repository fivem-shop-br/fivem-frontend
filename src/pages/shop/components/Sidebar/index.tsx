import { getShops } from "@src/services/queries";
import { useRouter } from "next/router";
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

interface SideBarProps {
  children: React.ReactNode;
}

export function SideBar({ children }: SideBarProps) {
  return (
    <Container>
      <SideBarContainer>
        <Shop>
          <div>
            <Image />
            <ul>
              <h3>Vice City</h3>
              <span>seunome.fivem-shop.com.br</span>
            </ul>
          </div>
        </Shop>
        <Liner />
        <Menu />
      </SideBarContainer>
      <Children>{children}</Children>
    </Container>
  );
}
