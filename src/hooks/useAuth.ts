import { useContext } from "react";
import { AuthContext } from "@src/contexts/auth-context";

export function useAuth() {
  const ctx = useContext(AuthContext);
  return { ...ctx };
}
