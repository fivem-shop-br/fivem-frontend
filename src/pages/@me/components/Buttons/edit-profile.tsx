import * as Dialog from "@radix-ui/react-dialog";
import * as Input from "@fivem-shop/react";
import * as z from "zod";
import { Button } from "@fivem-shop/react";
import PerfilI from "@src/source/perfil.png";
import { buttonCss } from "../Config";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogInput,
  DialogOverlay,
  DialogProfile,
} from "./styled.css";
import { Plus, X } from "phosphor-react";
import { useAuth } from "@src/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { api } from "@src/services/api-client";
const editProfileSChema = z.object({
  name: z.string().nonempty({ message: "Nome completo é obrigatório" }),
});

interface editProfileProps extends z.infer<typeof editProfileSChema> {
  image: File;
}

export function EditProfile() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const {
    setError,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<editProfileProps>({
    resolver: zodResolver(editProfileSChema),
    defaultValues: {
      name: user?.name,
    },
  });

  useEffect(() => {
    if (user?.name) setValue("name", user?.name);
  }, [user?.name]);

  const name = watch("name");
  const ImageStyle = {
    backgroundImage: `url(${user?.image ? user?.image : PerfilI.src})`,
  };

  const submitEvent = ({ name, image }: editProfileProps) => {
    console.log(image);

    api.patch("/me", { name });
    queryClient.setQueryData("me", { ...user, name });

    setIsOpenDialog(false);
  };

  return (
    <Dialog.Root onOpenChange={setIsOpenDialog} open={isOpenDialog}>
      <Dialog.Trigger asChild>
        <Button
          mode="secondary"
          hoverColor="$gray-500"
          backgroundColor="$gray-600"
          css={{ height: "45px" }}
        >
          Editar
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent asChild>
          <form onSubmit={handleSubmit(submitEvent)}>
            <section>
              <DialogHeader>
                <ul>
                  <h1>Editar Perfil</h1>
                  <span>
                    Altere informação da sua conta aqui, e clique em
                    "Atualizar".
                  </span>
                </ul>
                <Dialog.Close asChild>
                  <X size={32} />
                </Dialog.Close>
              </DialogHeader>
              <DialogProfile css={ImageStyle}>
                <input type="file" id="uploadFile" {...register("image")} />
                <label htmlFor="uploadFile" />
                <section>
                  <div>
                    <Plus weight="bold" color="#000" />
                  </div>
                </section>
              </DialogProfile>
              <DialogInput>
                <label>NOME</label>
                <Input.Root>
                  <Input.Input type="text" value={name} {...register("name")} />
                </Input.Root>
                <span>{errors && errors.name?.message}</span>
              </DialogInput>
              <DialogInput>
                <label>EMAIL</label>
                <Input.Root>
                  <Input.Input
                    type="text"
                    value={user?.email}
                    disabled={!user?.emailVerified}
                  />
                </Input.Root>
                {!user?.emailVerified && (
                  <span>
                    Para alterar email, você precisa verificar-lo primeiro.
                  </span>
                )}
              </DialogInput>
            </section>
            <DialogFooter>
              <Dialog.Close asChild>
                <Button
                  mode="primary"
                  backgroundColor="transparent"
                  hoverColor="transparent"
                  css={{ ...buttonCss }}
                >
                  Cancelar
                </Button>
              </Dialog.Close>
              <Button
                mode="primary"
                css={buttonCss}
                disabled={name === user?.name || !name}
              >
                Atualizar
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
