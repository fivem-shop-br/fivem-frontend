import { keyframes, styled } from "@fivem-shop/react";
import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { useRouter } from "next/router";

import { CaretLeft, CaretRight, CaretUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { SideBarProps } from "../..";
import { NavItem, Menu as MenuS } from "../../styles.css";
import { menuItems } from "./settings";

interface MenuProps {
  defaultPath: SideBarProps["path"];
}

export function Menu({ defaultPath: valueMenu }: MenuProps) {
  const [defaultValueMenu, setDefaultValueMenu] = useState(valueMenu);
  const router = useRouter();
  const validation = `/shop/[shop]`;
  const defaultPath = `/shop/${router.query.shop}`;

  function isActived(path: string): boolean {
    return router.pathname === path;
  }

  return (
    <MenuS>
      {menuItems.map(
        ({ isAccordion, name, Icon, path }, key) =>
          !isAccordion && (
            <Link key={key} href={`${defaultPath}${path}`}>
              <NavItem active={isActived(`${validation}`)}>
                <Icon
                  size={32}
                  weight={isActived(`${validation}`) ? "fill" : "light"}
                />
                <h3>{name}</h3>
              </NavItem>
            </Link>
          )
      )}

      <Accordion.Root
        type="single"
        onValueChange={setDefaultValueMenu}
        value={defaultValueMenu}
        collapsible
      >
        {menuItems.map(
          ({ isAccordion, name, Icon, accordion, path: providerPath }, key) =>
            isAccordion && (
              <Accordion.Item value={providerPath} className="item" key={key}>
                <Accordion.Header>
                  <Accordion.Trigger asChild>
                    <NavItem>
                      <Icon size={32} weight="light" />
                      <h3>{name}</h3>
                      <CaretUp size={20} className="CaretUp" />
                    </NavItem>
                  </Accordion.Trigger>
                </Accordion.Header>
                <AccordionContent className="content">
                  {accordion &&
                    accordion.map(({ Icon, name, path }, key) => (
                      <Link
                        key={key}
                        href={`${defaultPath}${providerPath}${path}`}
                      >
                        <NavItem
                          active={isActived(
                            `${validation}${providerPath}${path}`
                          )}
                          content
                        >
                          <Icon
                            size={25}
                            weight={
                              isActived(`${validation}${providerPath}${path}`)
                                ? "fill"
                                : "light"
                            }
                          />
                          <h3>{name}</h3>
                        </NavItem>
                      </Link>
                    ))}
                </AccordionContent>
              </Accordion.Item>
            )
        )}
      </Accordion.Root>

      <Link href="/shop">
        <NavItem>
          <CaretLeft size={32} weight="light" />
          <h3>Voltar</h3>
        </NavItem>
      </Link>
    </MenuS>
  );
}

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

const AccordionContent = styled(Accordion.Content, {
  overflow: "hidden",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});
