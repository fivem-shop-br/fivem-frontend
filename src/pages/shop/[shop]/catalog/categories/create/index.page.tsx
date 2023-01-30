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
import { catchError } from "@src/utils/process-error";
import { buttonCss } from "@src/pages/@me/components/Config";

const createCategorieSchema = z.object({
  name: z.string().nonempty({ message: "Este campo é obrigatório." }),
});

type createCategorieType = z.infer<typeof createCategorieSchema>;

export interface Error {
  message: string;
  statusCode: number;
}

export default function CreateCategorie({ shopId }: ShopProps) {
  const { push, query } = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<createCategorieType>({
    resolver: zodResolver(createCategorieSchema),
  });

  const submitEvent = async ({ name }: createCategorieType) => {
    const redict = query.redirect_url as string;

    try {
      setLoading(true);
      await api.post("/category", { name, shop_id: shopId });
      if (redict) push(redict);
    } catch (err) {
      const message = catchError(err);
      setError("name", { message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SideBar path="/catalog" shopId={shopId} overflow={true}>
      <Container>
        <Header>
          <h1>Criar Categoria</h1>
        </Header>
        <Area onSubmit={handleSubmit(submitEvent)} overflow>
          <section>
            <label>Nome</label>
            <Input.Root>
              <Input.Icon>
                <Tag size={22} />
              </Input.Icon>
              <Input.Input
                type="text"
                placeholder="Nome da categoria"
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
      shopId: shop,
    },
  };
};
