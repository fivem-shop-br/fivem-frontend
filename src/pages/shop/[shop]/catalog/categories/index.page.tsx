import Link from "next/link";
import { Button } from "@fivem-shop/react";
import { Tooltip } from "@src/components/Tooltip";
import { buttonCss } from "@src/pages/@me/components/Config";
import { SideBar } from "@src/pages/shop/components/Sidebar";
import { api } from "@src/services/api-client";
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

export interface CategorieProps {
  id: string;
  shop_slug: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function Categories({ shopId }: ShopProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery<CategorieProps[]>(
    `categories ${shopId}`,
    () => {
      return getCategories(shopId);
    }
  );

  async function handleDelete(id: string) {
    setLoading(true);
    const deleted = data && data.filter((index) => index.id !== id);

    try {
      await api.delete("category/" + id);
      queryClient.setQueryData(`categories ${shopId}`, deleted);
    } catch (err) {
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
    <SideBar path="/catalog" shopId={shopId}>
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
                            new Date(index.createdAt),
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
                                onClick={() => handleEdit(index.id, index.name)}
                              />
                            )}
                          </Tooltip>
                          <Tooltip content="Deletar" backgroundColor="#ff5448">
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
