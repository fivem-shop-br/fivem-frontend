import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "phosphor-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ToastRoot } from "./styled.css";

interface ToastProps {
  open: string | boolean;
  setOpen: (newState: boolean) => void;
}

export function Toast({ open, setOpen }: ToastProps) {
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastRoot open={!!open} onOpenChange={setOpen}>
        <ToastPrimitive.ToastTitle>{open}</ToastPrimitive.ToastTitle>
        <ToastPrimitive.ToastDescription asChild>
          <time>
            {format(new Date(), "EEEE, HH:mm 'de' dd/MM/yyyy", {
              locale: ptBR,
            })}
          </time>
        </ToastPrimitive.ToastDescription>
        <ToastPrimitive.ToastAction asChild altText="Goto schedule to undo">
          <X />
        </ToastPrimitive.ToastAction>
      </ToastRoot>
      <ToastPrimitive.ToastViewport />
    </ToastPrimitive.Provider>
  );
}
