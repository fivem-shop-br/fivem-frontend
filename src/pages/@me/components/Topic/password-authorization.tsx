import { Separator, Topic } from "../../styled.css";
import { ChangePassword } from "../Buttons/change-password";

export function TopicPasswordAuthorization() {
  return (
    <>
      <Separator />
      <Topic>
        <ul>
          <h2>SENHA E AUTENTICAÇÃO</h2>
          <p>Deseja trocar sua senha? Atualize sua senha agora</p>
        </ul>
        <div>
          <ChangePassword />
        </div>
      </Topic>
    </>
  );
}
