import { processReponseError } from "@src/utils/process-error";
import axios, { AxiosError } from "axios";
import { destroyCookie, parseCookies } from "nookies";
import { api } from "./api-client";

export interface Error {
  message: string;
  statusCode: number;
}
type typeError = AxiosError<Error>;

export function setupApiClient(ctx = undefined) {
  const cookies = parseCookies(ctx)["fivem-shop.token"];
  const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: cookies && `Bearer ${cookies}`,
    },
  });

  return api;
}

interface propsRegister {
  data: unknown;
  setLoading: (newState: boolean) => void;
}

export async function Register({
  data,
  setLoading,
}: propsRegister): Promise<string | undefined> {
  setLoading(true);
  try {
    await api.post("user", data);
  } catch (err) {
    const { response } = err as typeError;
    const { message } = processReponseError(response?.data!);
    return message;
  }
  setLoading(false);
}
