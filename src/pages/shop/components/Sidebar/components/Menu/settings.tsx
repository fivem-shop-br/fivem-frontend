import {
  Cardholder,
  ClipboardText,
  CreditCard,
  Folder,
  Gear,
  IconProps,
  Image as ImageIcon,
  Package,
  PaintBucket,
  PencilSimpleLine,
  Plugs,
  SquaresFour,
  Storefront,
  Tag,
  TerminalWindow,
  Ticket,
  WifiHigh,
} from "phosphor-react";

export const menuItems = [
  {
    path: "/",
    name: "Dashboard",
    Icon: (props: IconProps) => <SquaresFour {...props} />,
    isAccordion: false,
  },
  {
    path: "/catalog",
    name: "Catálogo",
    Icon: (props: IconProps) => <Storefront {...props} />,
    isAccordion: true,
    accordion: [
      {
        path: "/categories",
        name: "Categorias",
        Icon: (props: IconProps) => <Tag {...props} />,
      },
      {
        path: "/products",
        name: "Produtos",
        Icon: (props: IconProps) => <Package {...props} />,
      },
      {
        path: "/coupons",
        name: "Cupons",
        Icon: (props: IconProps) => <Ticket {...props} />,
      },
    ],
  },
  {
    path: "/financial",
    name: "Financeiro",
    Icon: (props: IconProps) => <Cardholder {...props} />,
    isAccordion: true,
    accordion: [
      {
        path: "/requests",
        name: "Pedidos",
        Icon: (props: IconProps) => <ClipboardText {...props} />,
      },
      {
        path: "/methods",
        name: "Métodos",
        Icon: (props: IconProps) => <CreditCard {...props} />,
      },
      {
        path: "/signature",
        name: "Assinatura",
        Icon: (props: IconProps) => <PencilSimpleLine {...props} />,
      },
    ],
  },
  {
    path: "/integration",
    name: "Integração",
    Icon: (props: IconProps) => <Plugs {...props} />,
    isAccordion: true,
    accordion: [
      {
        path: "/commands",
        name: "Comandos",
        Icon: (props: IconProps) => <TerminalWindow {...props} />,
      },
      {
        path: "/connection",
        name: "Conexão",
        Icon: (props: IconProps) => <WifiHigh {...props} />,
      },
    ],
  },
  {
    path: "/settings",
    name: "Configuração",
    Icon: (props: IconProps) => <Gear {...props} />,
    isAccordion: true,
    accordion: [
      {
        path: "/theme",
        name: "Tema",
        Icon: (props: IconProps) => <PaintBucket {...props} />,
      },
      {
        path: "/brand",
        name: "Logo Tipo",
        Icon: (props: IconProps) => <ImageIcon {...props} />,
      },
      {
        path: "/coupons",
        name: "Geral",
        Icon: (props: IconProps) => <Folder {...props} />,
      },
    ],
  },
];
