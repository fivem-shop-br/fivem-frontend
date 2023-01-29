import { AxiosError } from "axios";

interface defaultError {
  message: string;
  statusCode: number;
}

type typeError = AxiosError<defaultError>;

export function catchError(err: unknown): string {
  const error = err as typeError;
  return processReponseError(error.response?.data.message!);
}

export function processReponseError(message: string) {
  if (!message) return "Ocorreu um erro interno, tente novamente.";
  return message;
}
