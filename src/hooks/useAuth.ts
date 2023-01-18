import { useContext } from "react";
import { AuthContext } from "@src/contexts/auth-context";

export function useAuth() {
  const { ...rest } = useContext(AuthContext);
  return { ...rest };
}
