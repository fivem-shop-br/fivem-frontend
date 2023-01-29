import Image from "next/image";
import { Box, ContainerSingular } from "./index.css";

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

      <Image
        src={props.image}
        width="1920"
        height="1080"
        alt={props.title}
        quality={100}
      />
    </ContainerSingular>
  );
}
