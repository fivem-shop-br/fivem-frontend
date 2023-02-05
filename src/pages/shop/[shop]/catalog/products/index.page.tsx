import Link from "next/link";
import { Button } from "@fivem-shop/react";
import { Tooltip } from "@src/components/Tooltip";
import { buttonCss } from "@src/pages/@me/components/Config";
import { SideBar } from "@src/pages/shop/components/Sidebar";
import { getProducts } from "@src/services/queries";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import * as Input from "@fivem-shop/react";
import {
  CircleNotch,
  PencilSimple,
  Plus,
  Tag,
  Trash,
  Package,
  MagnifyingGlass,
} from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { ShopProps } from "../../index.page";
import { Container } from "../../styled.css";
import {
  Area,
  Header,
  Search,
  SearchContainer,
  Table,
  TableImage,
} from "../styles.css";
import { SelectCategory } from "./components/select-category";
import { api } from "@src/services/api-client";

export interface ProductsProps {
  id: string;
  category_id: string;
  name: string;
  image: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export default function Products({ shop_slug }: ShopProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [categoryIdSelected, setCategoryIdSelected] = useState<string>("none");
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, refetch, isLoading } = useQuery<ProductsProps[]>(
    `products ${shop_slug}`,
    () => {
      if (categoryIdSelected === "none") return [];
      return getProducts(categoryIdSelected);
    }
  );

  async function handleDelete(id: string) {
    setLoading(true);
    const deleted = data && data.filter((index) => index.id !== id);

    try {
      await api.delete("product/" + id);
      queryClient.setQueryData(`products ${shop_slug}`, deleted);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const selectCategory = localStorage.getItem("select_category");
    if (selectCategory) setCategoryIdSelected(selectCategory);
    refetch();
  }, [categoryIdSelected]);

  return (
    <SideBar path="/catalog" shopId={shop_slug}>
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
              Adicionar Produto
            </Link>
          </Button>
        </Header>
        <SearchContainer>
          <Search>
            <SelectCategory
              shop_slug={shop_slug}
              setCategoryIdSelected={setCategoryIdSelected}
              categoryIdSelected={categoryIdSelected}
            />
            <Input.Root>
              <Input.Icon position="left">
                <MagnifyingGlass size={22} />
              </Input.Icon>
              <Input.Input type="text" placeholder="Pesquisar por produto..." />
            </Input.Root>
          </Search>
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
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Criando em</th>
                        <th>Ultima edição</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((index, key) => (
                        <tr key={key}>
                          <td>
                            <TableImage
                              css={{ backgroundImage: `url(${index.image})` }}
                            />
                          </td>
                          <td>{index.name}</td>
                          <td>
                            {index.price.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </td>
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
                                  onClick={() =>
                                    !loading && handleDelete(index.id)
                                  }
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
                    {categoryIdSelected !== "none" ? (
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
      shop_slug: shop,
    },
  };
};
