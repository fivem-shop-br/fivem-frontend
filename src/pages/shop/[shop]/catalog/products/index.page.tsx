import Link from "next/link";
import { Button } from "@fivem-shop/react";
import { Tooltip } from "@src/components/Tooltip";
import { buttonCss } from "@src/pages/@me/components/Config";
import { SideBar } from "@src/pages/shop/components/Sidebar";
import { getProducts } from "@src/services/queries";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
  CircleNotch,
  PencilSimple,
  Plus,
  Tag,
  Trash,
  Package,
} from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ShopProps } from "../../index.page";
import { Container } from "../../styled.css";
import { Area, Header, SearchContainer, Table } from "../styles.css";
import { CategorieProps } from "../categories/index.page";
import { SelectCategory } from "./components/select-category";

export interface ProductsProps {
  id: string;
  category_id: string;
  name: string;
  image: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export default function Products({ shopId }: ShopProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [categoryIdSelected, setCategoryIdSelected] = useState<string>();
  const router = useRouter();

  const { data, refetch, isLoading } = useQuery<CategorieProps[]>(
    `products ${shopId}`,
    () => {
      if (!categoryIdSelected) return [];
      return getProducts(categoryIdSelected);
    }
  );

  useEffect(() => {
    refetch();
  }, [categoryIdSelected]);

  return (
    <SideBar path="/catalog" shopId={shopId}>
      <Container>
        <Header>
          <h1>Todos Produtos</h1>

          <Button
            mode="primary"
            css={{ ...buttonCss, textDecoration: "none" }}
            asChild
          >
            <Link
              href={`${router.asPath}/create?redirect_url=${router.asPath}`}
            >
              <Plus weight="bold" size={22} />
              Adicionar Categoria
            </Link>
          </Button>
        </Header>
        <SearchContainer>
          <SelectCategory
            shopId={shopId}
            setCategoryIdSelected={setCategoryIdSelected}
          />
          <Area table={!isLoading && data && data.length > 0}>
            {isLoading ? (
              <div>
                <CircleNotch size={50} className="loading-animation" />
                <ul>
                  <h2>Carregando...</h2>
                </ul>
              </div>
            ) : (
              <>
                {data && data.length ? (
                  <Table>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Criando em</th>
                        <th>Ultima edição</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((index, key) => (
                        <tr key={key}>
                          <td>{index.name}</td>
                          <td>
                            {format(new Date(index.createdAt), `dd/MM/yyyy`)}
                          </td>
                          <td>
                            {format(
                              new Date(index.updatedAt),
                              `dd/MM/yyyy 'de' HH:mm`
                            )}
                          </td>
                          <td></td>
                          <td>
                            <Tooltip content="Editar">
                              {loading ? (
                                <CircleNotch
                                  size={20}
                                  className="icons loading-animation"
                                />
                              ) : (
                                <PencilSimple
                                  size={20}
                                  color="#94FF92"
                                  className="icons"
                                />
                              )}
                            </Tooltip>
                            <Tooltip
                              content="Deletar"
                              backgroundColor="#ff5448"
                            >
                              {loading ? (
                                <CircleNotch
                                  size={20}
                                  className="icons loading-animation"
                                />
                              ) : (
                                <Trash
                                  size={20}
                                  color="#ff5448"
                                  className="icons"
                                />
                              )}
                            </Tooltip>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                ) : (
                  <>
                    {categoryIdSelected ? (
                      <div>
                        <Package size={50} />
                        <ul>
                          <h2>Você ainda não tem produtos</h2>
                          <span>
                            Você pode adicionar itens, e todas aparecerão aqui!
                          </span>
                        </ul>
                      </div>
                    ) : (
                      <div>
                        <Tag size={50} />
                        <ul>
                          <h2>Selecione uma categoria</h2>
                          <span>Você ainda não selecionou uma categoria.</span>
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </Area>
        </SearchContainer>
      </Container>
    </SideBar>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { shop },
}) => {
  return {
    props: {
      shopId: shop,
    },
  };
};
