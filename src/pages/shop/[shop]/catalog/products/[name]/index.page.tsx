import { SideBar } from "@src/pages/shop/components/Sidebar";
import { GetServerSideProps } from "next";
import { ShopProps } from "../../../index.page";
import { Container } from "../../../styled.css";
import {
  CreatedImage,
  Header,
  InputFile,
  Inputs,
  UploadFile,
} from "../../styles.css";
import * as Input from "@fivem-shop/react";
import * as z from "zod";
import { Button } from "@fivem-shop/react";
import {
  CircleNotch,
  CurrencyDollarSimple,
  FileImage,
  Package,
  X,
} from "phosphor-react";
import { SelectCategory } from "../components/select-category";
import { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, apiShop } from "@src/services/api-client";
import { catchError } from "@src/utils/process-error";
import { useRouter } from "next/router";
import { Toast } from "@src/components/Toast";
import { useQuery } from "react-query";
import { ProductsProps } from "../index.page";
import { getProductById } from "@src/services/queries";

const createProductSchema = z.object({
  name: z.string().nonempty({ message: "Este campo é obrigatório." }),
  price: z
    .number()
    .nonnegative({ message: "Este campo não pode ser negativo." }),
});

type createProductType = z.infer<typeof createProductSchema>;

export default function CreateProduct({ shop_slug }: ShopProps) {
  const { push, query } = useRouter();
  const [toast, setToast] = useState<string | boolean>("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [categoryIdSelected, setCategoryIdSelected] = useState<string>("none");
  const { data, refetch, isLoading } = useQuery<ProductsProps>(
    `product ${query.id}`,
    () => {
      return getProductById(query.id as string);
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<createProductType>({
    resolver: zodResolver(createProductSchema),
  });

  useEffect(() => {
    if (data) setImages(data.image);
    setValue("name", data?.name!);
    setValue("price", data?.price!);
  }, [data]);

  const submitEvent = async ({ name, price }: createProductType) => {
    const redict = query.redirect_url as string;

    try {
      setLoading(true);
      await apiShop(shop_slug).patch("product", {
        id: query.id,
        categoryId: data?.categoryId,
        name,
        price,
        image: images,
      });
      if (redict) push(redict);
    } catch (err) {
      const message = catchError(err);
      setError("name", { message });
    } finally {
      setLoading(false);
    }
  };

  const handleImage = async ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (images.length >= 5) return;
    if (!target.files?.length) return;
    const formData = new FormData();
    formData.append("file", target.files[0]);

    setLoading(true);
    try {
      const upload = await api.post("/upload", formData);
      setImages((rest) => [...rest, upload.data.url]);
    } catch (err) {
      setToast(catchError(err));
    }

    target.files = null;
    setLoading(false);
  };

  function handleDeleteImage(url: string) {
    const removedImage = images.filter((image) => image !== url);
    setImages(removedImage);
  }

  return (
    <>
      <Toast setOpen={setToast} open={toast} />
      <SideBar path="/catalog" shopId={shop_slug} overflow>
        <Container>
          <Header>
            <h1>Editar Produto</h1>
          </Header>
          <form onSubmit={handleSubmit(submitEvent)}>
            <Inputs>
              <section>
                <label>Nome</label>
                <Input.Root>
                  <Input.Icon position="left">
                    <Package size={22} />
                  </Input.Icon>
                  <Input.Input
                    type="text"
                    placeholder="Nome do produto"
                    {...register("name")}
                    autoFocus
                  />
                </Input.Root>
                <span>{errors && errors.name?.message}</span>
              </section>
              <section>
                <label>Preço</label>
                <Input.Root>
                  <Input.Icon position="left">
                    <CurrencyDollarSimple size={22} />
                  </Input.Icon>
                  <Input.Input
                    type="number"
                    placeholder="Preço do produto"
                    {...register("price", { valueAsNumber: true })}
                  />
                </Input.Root>
                <span>{errors && errors.price?.message}</span>
              </section>

              <section>
                <label>Imagens 5/{images.length}</label>
                <UploadFile>
                  <InputFile>
                    <div>
                      <input
                        type="file"
                        id="uploadFile"
                        accept="image/*"
                        onChange={handleImage}
                        // @ts-ignore
                        onClick={(e) => (e.target.value = null)}
                      />
                      <label htmlFor="uploadFile">
                        {loading ? (
                          <>
                            <CircleNotch
                              size={32}
                              className="loading-animation"
                            />
                            Carregando... Aguarde
                          </>
                        ) : (
                          <>
                            <FileImage size={32} />
                            Selecionar imagem
                          </>
                        )}
                      </label>
                    </div>
                  </InputFile>
                  {images &&
                    images.map((image, key) => (
                      <CreatedImage
                        key={key}
                        css={{
                          background: `url(${image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        onClick={() => handleDeleteImage(image)}
                      >
                        <X size={32} color="#FF5757" />
                      </CreatedImage>
                    ))}
                </UploadFile>
              </section>
            </Inputs>
            <Button mode="primary">Finalizar Produto</Button>
          </form>
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
