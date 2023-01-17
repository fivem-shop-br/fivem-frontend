import { Main } from "./styles.css";
import { Band } from "./components/Band";
import { animateProvider } from "@src/utils/animate";
import { Apresation } from "./components/Apresentation";

export default function Home() {
  return (
    <Main {...animateProvider}>
      <Apresation />
      <Band />
    </Main>
  );
}
