import { createContext, ReactNode } from "react";

import { destroyCookie, setCookie } from "nookies";
import { api } from "../services/api-client";
import { useQuery } from "react-query";
import { getMe } from "@src/services/queries";

type User = {
  id: string;
  email: string;
  name: string;
  emailVerified?: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
};

interface token {
  access_token: string;
}

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<unknown>;
  signOut: () => void;
  loading: boolean;
  user: User | null | undefined;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);
export function AuthProvider({ children }: AuthProviderProps) {
  const {
    isLoading: loading,
    data: user,
    refetch,
  } = useQuery<User | null>("me", getMe);

  function signOut() {
    destroyCookie(undefined, "fivem-shop.token");
    refetch();
  }

  async function signIn(credenciais: SignInCredentials) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await api.post<token>("signin", credenciais);

        setCookie(undefined, "fivem-shop.token", data.access_token, {
          maxAge: 60 * 60 * 24 * 7, // 7 days
          path: "/",
        });

        api.defaults.headers["Authorization"] = "Bearer " + data.access_token;
        refetch();
        resolve("authorized");
      } catch (err) {
        reject(err);
      }
    });
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
