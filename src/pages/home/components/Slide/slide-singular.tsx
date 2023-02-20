import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Box, ContainerSingular, DialogSelectImage } from "./index.css";
import {
  DialogContent,
  DialogOverlay,
} from "@src/pages/@me/components/Buttons/styled.css";

interface SlideProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  children: React.ReactNode;
}

export function SlideSingular(props: SlideProps) {
  return (
    <ContainerSingular>
      <div>
        <Box>{props.children}</Box>
        <h1>
          {props.title} <br />
          <span>{props.subtitle}</span>
        </h1>
      </div>
      <p>{props.description}</p>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Image
            src={props.image}
            width="1920"
            height="1080"
            alt={props.title}
            quality={100}
          />
        </Dialog.Trigger>
        <Dialog.Portal>
          <DialogOverlay />
          <DialogContent asChild>
            <DialogSelectImage
              src={props.image}
              width="1920"
              height="1080"
              alt={props.title}
              quality={100}
            />
          </DialogContent>
        </Dialog.Portal>
      </Dialog.Root>
    </ContainerSingular>
  );
}
