import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import { ShopProps } from "../../../index.page";
import { Container } from "../../../styled.css";
import { Area, Header, InputFile, Inputs } from "../../styles.css";
import * as Input from "@fivem-shop/react";
import * as z from "zod";
import { Button } from "@fivem-shop/react";
import { CurrencyDollarSimple, FileImage, Package } from "phosphor-react";
import { SelectCategory } from "../components/select-category";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@src/services/api-client";
import { catchError } from "@src/utils/process-error";
import { useRouter } from "next/router";

const createProductSchema = z.object({
  name: z.string().nonempty({ message: "Este campo é obrigatório." }),
  price: z.string().nonempty({ message: "Este campo é obrigatório." }),
});

type createProductType = z.infer<typeof createProductSchema>;

export default function CreateProduct({ shop_slug }: ShopProps) {
  const { push, query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [categoryIdSelected, setCategoryIdSelected] = useState<string>("none");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<createProductType>({
    resolver: zodResolver(createProductSchema),
  });

  const submitEvent = async ({ name }: createProductType) => {
    const redict = query.redirect_url as string;

    try {
      setLoading(true);
      await api.post("/category", { name, shop_slug });
      if (redict) push(redict);
    } catch (err) {
      const message = catchError(err);
      setError("name", { message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SideBar path="/catalog" shopId={shop_slug} overflow>
      <Container>
        <Header>
          <h1>Criar Produto</h1>
        </Header>
        <Area onSubmit={handleSubmit(submitEvent)} overflow>
          <Inputs>
            <section>
              <label>Categoria</label>
              <SelectCategory
                shop_slug={shop_slug}
                setCategoryIdSelected={setCategoryIdSelected}
                categoryIdSelected={categoryIdSelected}
              />
            </section>
            <section>
              <label>Nome</label>
              <Input.Root>
                <Input.Icon>
                  <Package size={22} />
                </Input.Icon>
                <Input.Input
                  type="text"
                  placeholder="Nome do produto"
                  {...register("name")}
                />
              </Input.Root>
              <span>{errors && errors.name?.message}</span>
            </section>
            <section>
              <label>Preço</label>
              <Input.Root>
                <Input.Icon>
                  <CurrencyDollarSimple size={22} />
                </Input.Icon>
                <Input.Input
                  type="text"
                  placeholder="Preço do produto"
                  {...register("price")}
                />
              </Input.Root>
              <span>{errors && errors.price?.message}</span>
            </section>

            <InputFile>
              <label>Imagens</label>
              <div>
                <input type="file" id="uploadFile" />
                <label htmlFor="uploadFile">
                  <FileImage size={32} />
                </label>
              </div>
            </InputFile>
          </Inputs>
          <Button mode="primary" disabled={categoryIdSelected === "none"}>
            Finalizar Produto
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
