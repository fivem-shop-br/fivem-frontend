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
}

export function SideBar({ children, path }: SideBarProps) {
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
        <Menu defaultPath={path} />
      </SideBarContainer>
      <Children>{children}</Children>
    </Container>
  );
}
