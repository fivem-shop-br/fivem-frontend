import * as Accordion from "@radix-ui/react-accordion";
import {
  Cardholder,
  CaretLeft,
  CaretUp,
  ClipboardText,
  Folder,
  Gear,
  Image as ImageIcon,
  Package,
  PaintBucket,
  PencilSimpleLine,
  SquaresFour,
  Storefront,
  Tag,
  Ticket,
} from "phosphor-react";
import { Image } from "../../styled.css";
import {
  Container,
  SideBarContainer,
  Shop,
  Liner,
  Menu,
  NavItem,
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
        <Menu>
          <NavItem active>
            <SquaresFour size={32} weight="fill" />
            <h3>Dashboard</h3>
          </NavItem>

          <Accordion.Root type="single" collapsible>
            <Accordion.Item value="1" className="item">
              <Accordion.Header>
                <Accordion.Trigger asChild>
                  <NavItem>
                    <Storefront size={32} weight="thin" />
                    <h3>Catálogo</h3>
                    <CaretUp size={20} className="CaretUp" />
                  </NavItem>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="content">
                <NavItem content>
                  <Tag size={25} weight="thin" />
                  <h3>Categorias</h3>
                </NavItem>

                <NavItem content>
                  <Package size={25} weight="thin" />
                  <h3>Produtos</h3>
                </NavItem>

                <NavItem content>
                  <Ticket size={25} weight="thin" />
                  <h3>Cupons</h3>
                </NavItem>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="2" className="item">
              <Accordion.Header>
                <Accordion.Trigger asChild>
                  <NavItem>
                    <Cardholder size={32} weight="thin" />
                    <h3>Financeiro</h3>
                    <CaretUp size={20} className="CaretUp" />
                  </NavItem>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="content">
                <NavItem content>
                  <ClipboardText size={25} weight="thin" />
                  <h3>Pedidos</h3>
                </NavItem>

                <NavItem content>
                  <ImageIcon size={25} weight="thin" />
                  <h3>Métodos</h3>
                </NavItem>

                <NavItem content>
                  <PencilSimpleLine size={25} weight="thin" />
                  <h3>Assinatura</h3>
                </NavItem>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="3" className="item">
              <Accordion.Header>
                <Accordion.Trigger asChild>
                  <NavItem>
                    <Gear size={32} weight="thin" />
                    <h3>Configuração</h3>
                    <CaretUp size={20} className="CaretUp" />
                  </NavItem>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="content">
                <NavItem content>
                  <PaintBucket size={25} weight="thin" />
                  <h3>Tema</h3>
                </NavItem>

                <NavItem content>
                  <ImageIcon size={25} weight="thin" />
                  <h3>Logo Tipo</h3>
                </NavItem>

                <NavItem content>
                  <Folder size={25} weight="thin" />
                  <h3>Geral</h3>
                </NavItem>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
          <NavItem>
            <CaretLeft size={32} weight="fill" />
            <h3>Voltar</h3>
          </NavItem>
        </Menu>
      </SideBarContainer>
      {children}
    </Container>
  );
}
