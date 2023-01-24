import { Skeleton } from "@src/components/Skeleton";
import { useAuth } from "@src/hooks/useAuth";
import { SideBar } from "../components/Sidebar";
import { Container } from "./styled.css";

export default function Shop() {
  const { user } = useAuth();

  return (
    <SideBar>
      <Container>
        <ul>
          <Skeleton state={user?.name} width="500px" height="50px">
            <h1>Bem vindo, {user?.name}</h1>
          </Skeleton>
          <Skeleton state={user?.name} width="300px">
            <span>é um prazer te ver aqui novamente!</span>
          </Skeleton>
        </ul>
      </Container>
    </SideBar>
  );
}
