import * as z from "zod";
import Link from "next/link";
import { Button } from "@fivem-shop/react";
import { Form, Main } from "../styles.css";

import * as Input from "@fivem-shop/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@src/hooks/useAuth";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { CircleNotch, Envelope, Lock } from "phosphor-react";
import { useState } from "react";
import { processReponseError } from "@src/utils/process-error";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { api } from "@src/services/api-client";

const LoginFormScrema = z.object({
  name: z.string().nonempty({ message: "Nome não pode ser vazio." }),
  email: z.string().email({ message: "Insira um e-mail válido" }),
  password: z
    .string()
    .max(20, "Você atingiu o maximo de caracteres.")
    .min(6, "É necessario 6 caracteres."),
});
type loginType = z.infer<typeof LoginFormScrema>;

export interface Error {
  message: string;
  statusCode: number;
}
type typeError = AxiosError<Error>;

export default function Register() {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { push } = useRouter();
  const {
    setError,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<loginType>({
    resolver: zodResolver(LoginFormScrema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function submitEvent(data: loginType) {
    setLoading(true);
    try {
      await api.post("user", { ...data });
      push("/auth/login");
    } catch (err) {
      const { response } = err as typeError;
      if (response) {
        const { message } = processReponseError(response.data);
        setError("email", { message });
      }
    }
    setLoading(false);
  }

  return (
    <Main>
      <Form onSubmit={handleSubmit(submitEvent)}>
        <h1>Fazer Cadastro</h1>

        <section>
          <label>Nome</label>
          <Input.Root>
            <Input.Icon>
              <Envelope size={22} />
            </Input.Icon>
            <Input.Input
              type="text"
              placeholder="Digite seu nome"
              autoFocus
              {...register("name")}
            />
          </Input.Root>
          <span>{errors && errors.name?.message}</span>
        </section>

        <section>
          <label>Email</label>
          <Input.Root>
            <Input.Icon>
              <Envelope size={22} />
            </Input.Icon>
            <Input.Input
              type="email"
              placeholder="Digite seu e-mail"
              autoFocus
              {...register("email")}
            />
          </Input.Root>
          <span>{errors && errors.email?.message}</span>
        </section>

        <section>
          <label>Senha</label>
          <Input.Root>
            <Input.Icon>
              <Lock size={22} />
            </Input.Icon>
            <Input.Input
              type="password"
              placeholder="Digite seu senha"
              {...register("password")}
            />
          </Input.Root>
          <span>{errors.password && errors.password?.message}</span>
        </section>

        <Button
          mode="primary"
          size="medium"
          disabled={!watch("email") || !watch("password") || loading}
        >
          {loading ? <CircleNotch size={21} /> : "Entrar"}
        </Button>
        <h4>
          Já tem uma conta? <Link href="/auth/login">Logar-se</Link>
        </h4>
      </Form>
    </Main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookie = parseCookies(ctx);
  if (cookie["fivem-shop.token"]) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
