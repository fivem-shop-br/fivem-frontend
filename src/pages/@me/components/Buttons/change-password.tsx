import * as Dialog from "@radix-ui/react-dialog";
import * as Input from "@fivem-shop/react";
import { Button } from "@fivem-shop/react";
import { buttonCss } from "../Config";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogInput,
  DialogOverlay,
} from "./styled.css";
import { X } from "phosphor-react";

export function ChangePassword() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button mode="primary" css={buttonCss}>
          Mudar senha
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent asChild>
          <form>
            <section>
              <DialogHeader>
                <ul></ul>
                <ul>
                  <h1>Atualizar sua senha</h1>
                  <span>Insira sua senha atual e uma nova senha.</span>
                </ul>
                <Dialog.Close asChild>
                  <X size={32} />
                </Dialog.Close>
              </DialogHeader>
              <DialogInput>
                <label>SENHA ATUAL</label>
                <Input.Root>
                  <Input.Input type="password" />
                </Input.Root>
              </DialogInput>
              <DialogInput>
                <label>NOVA ATUAL</label>
                <Input.Root>
                  <Input.Input type="password" />
                </Input.Root>
              </DialogInput>
              <DialogInput>
                <label>CONFIRMAR NOVA SENHA</label>
                <Input.Root>
                  <Input.Input type="password" />
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
                Pronto
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
