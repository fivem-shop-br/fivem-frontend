import * as Dialog from "@radix-ui/react-dialog";
import * as Input from "@fivem-shop/react";
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

export function EditProfile() {
  const { user } = useAuth();

  const ImageStyle = {
    backgroundImage: `url(${user?.image ? user?.image : PerfilI.src})`,
  };

  return (
    <Dialog.Root>
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
        <DialogContent>
          <section>
            <DialogHeader>
              <ul>
                <h1>Editar Perfil</h1>
                <span>
                  Altere informação da sua conta aqui, e clique em "Atualizar".
                </span>
              </ul>
              <Dialog.Close asChild>
                <X size={32} />
              </Dialog.Close>
            </DialogHeader>
            <DialogProfile css={ImageStyle}>
              <section>
                <div>
                  <Plus weight="bold" color="#000" />
                </div>
              </section>
            </DialogProfile>
            <DialogInput>
              <label>NOME</label>
              <Input.Root>
                <Input.Input type="text" value={user?.name} />
              </Input.Root>
            </DialogInput>
            <DialogInput>
              <label>EMAIL</label>
              <Input.Root>
                <Input.Input type="text" value={user?.email} />
              </Input.Root>
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
            <Button mode="primary" css={buttonCss}>
              Atualizar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
