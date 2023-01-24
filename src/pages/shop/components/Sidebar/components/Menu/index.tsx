import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { useRouter } from "next/router";

import { CaretUp } from "phosphor-react";
import { NavItem, Menu as MenuS } from "../../styles.css";
import { menuItems } from "./settings";

export function Menu() {
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
                  weight={isActived(`${validation}`) ? "fill" : "thin"}
                />
                <h3>{name}</h3>
              </NavItem>
            </Link>
          )
      )}

      <Accordion.Root type="single" collapsible>
        {menuItems.map(
          ({ isAccordion, name, Icon, accordion, path: providerPath }, key) =>
            isAccordion && (
              <Accordion.Item value={key.toString()} className="item" key={key}>
                <Accordion.Header>
                  <Accordion.Trigger asChild>
                    <NavItem>
                      <Icon size={32} weight="thin" />
                      <h3>{name}</h3>
                      <CaretUp size={20} className="CaretUp" />
                    </NavItem>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="content">
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
                                : "thin"
                            }
                          />
                          <h3>{name}</h3>
                        </NavItem>
                      </Link>
                    ))}
                </Accordion.Content>
              </Accordion.Item>
            )
        )}
      </Accordion.Root>
    </MenuS>
  );
}
