import Link from "next/link";
import { Button } from "@fivem-shop/react";
import { Tooltip } from "@src/components/Tooltip";
import { buttonCss } from "@src/pages/@me/components/Config";
import { SideBar } from "@src/pages/shop/components/Sidebar";
import { api, apiShop } from "@src/services/api-client";
import { getCategories } from "@src/services/queries";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { CircleNotch, PencilSimple, Plus, Tag, Trash } from "phosphor-react";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { ShopProps } from "../../index.page";
import { Container } from "../../styled.css";
import { Area, Header, Table } from "../styles.css";

import { Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { catchError } from "@src/utils/process-error";
import { Toast } from "@src/components/Toast";

export interface CategorieProps {
  id: string;
  shop_slug: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function Categories({ shop_slug }: ShopProps) {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<string | boolean>("");
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<CategorieProps[]>(
    `categories ${shop_slug}`,
    () => {
      return getCategories(shop_slug);
    }
  );

  async function handleDelete(id: string) {
    setLoading(true);
    const deleted = data && data.filter((index) => index.id !== id);

    try {
      await apiShop(shop_slug).delete("category/" + id);
      queryClient.setQueryData(`categories ${shop_slug}`, deleted);
    } catch (err) {
      setToast(catchError(err));
    } finally {
      setLoading(false);
    }
  }

  function handleEdit(id: string, name: string) {
    router.push(
      `${router.asPath}/${name}?redirect_url=${router.asPath}&id=${id}`
    );
  }

  return (
    <>
      <Toast setOpen={setToast} open={toast} />
      <SideBar path="/catalog" shopId={shop_slug}>
        <Container>
          <Header>
            <h1>Todas Categorias</h1>

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
                    <Thead>
                      <Tr>
                        <Th>Nome</Th>
                        <Th>Criando em</Th>
                        <Th>Ultima edição</Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data.map((index, key) => (
                        <Tr key={key}>
                          <Td>{index.name}</Td>
                          <Td>
                            {format(new Date(index.createdAt), `dd/MM/yyyy`)}
                          </Td>
                          <Td>
                            {format(
                              new Date(index.updatedAt),
                              `dd/MM/yyyy 'de' HH:mm`
                            )}
                          </Td>
                          <Td></Td>
                          <Td>
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
                                  onClick={() =>
                                    handleEdit(index.id, index.name)
                                  }
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
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                ) : (
                  <div>
                    <Tag size={50} />
                    <ul>
                      <h2>Você ainda não tem categorias</h2>
                      <span>
                        Você pode adicionar itens, e todas aparecerão aqui!
                      </span>
                    </ul>
                  </div>
                )}
              </>
            )}
          </Area>
        </Container>
      </SideBar>
    </>
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
