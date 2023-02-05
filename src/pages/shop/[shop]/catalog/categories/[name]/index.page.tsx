import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import { ShopProps } from "../../../index.page";
import { Container } from "../../../styled.css";
import { Area, Header } from "../../styles.css";
import * as Input from "@fivem-shop/react";
import * as z from "zod";
import { Button } from "@fivem-shop/react";
import { CircleNotch, Tag } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { api } from "@src/services/api-client";
import { useState } from "react";
import { buttonCss } from "@src/pages/@me/components/Config";
import { useQueryClient } from "react-query";
import { catchError } from "@src/utils/process-error";

const EditCategorieSchema = z.object({
  name: z.string().nonempty({ message: "Este campo é obrigatório." }),
});

type EditCategorieType = z.infer<typeof EditCategorieSchema>;

export interface Error {
  message: string;
  statusCode: number;
}

export default function EditCategorie({ shop_slug }: ShopProps) {
  const { push, query } = useRouter();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<EditCategorieType>({
    resolver: zodResolver(EditCategorieSchema),
  });

  const submitEvent = async ({ name }: EditCategorieType) => {
    setLoading(true);
    const redict = query.redirect_url as string;

    try {
      await api.patch("category", { shopSlug: shop_slug, name, id: query.id });
      if (redict) push(redict);
    } catch (err) {
      const message = catchError(err);
      setError("name", { message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SideBar path="/catalog" shopId={shop_slug} overflow={true}>
      <Container>
        <Header>
          <h1>Editar Categoria</h1>
        </Header>
        <Area onSubmit={handleSubmit(submitEvent)} overflow>
          <section>
            <label>Nome</label>
            <Input.Root>
              <Input.Icon position="left">
                <Tag size={22} />
              </Input.Icon>
              <Input.Input
                type="text"
                placeholder="Nome da categoria"
                defaultValue={query.name}
                {...register("name")}
                autoFocus
              />
            </Input.Root>
            <span>{errors && errors.name?.message}</span>
          </section>
          <Button mode="primary" css={buttonCss} disabled={loading}>
            {loading ? <CircleNotch size={21} /> : "Finalizar Categoria"}
          </Button>
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
      shop_slug: shop,
    },
  };
};
