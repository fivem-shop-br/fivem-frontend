interface defaultError {
  message: string;
  statusCode: number;
}

export function processReponseError({ message }: defaultError): {
  message: string;
} {
  if (!message) return { message: "Ocorreu um erro interno, tente novamente." };
  return { message };
}
