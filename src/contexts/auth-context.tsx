import { createContext, ReactNode, useEffect, useState } from "react";

import { destroyCookie, setCookie, parseCookies } from "nookies";
import { api } from "../services/api-client";

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
  user: User;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const cookie = parseCookies();

  useEffect(() => {
    const authToken = async () => {
      if (cookie["fivem-shop.token"]) {
        return connect();
      }
      setLoading(false);
    };
    authToken();
  }, []);

  function signOut() {
    setUser(null);
    destroyCookie(undefined, "fivem-shop.token");
  }

  async function signIn({ email, password }: SignInCredentials) {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await api.post<token>("signin", {
          email,
          password,
        });

        setCookie(undefined, "fivem-shop.token", data.access_token, {
          maxAge: 60 * 60 * 24 * 7, // 7 days
          path: "/",
        });

        api.defaults.headers["Authorization"] = "Bearer " + data.access_token;
        resolve("Authorization");

        connect();
      } catch (err) {
        reject(err);
      }
    });
  }

  async function connect() {
    setLoading(true);
    try {
      const { data } = await api.get<User>("me");
      setUser({ ...data });
    } catch (e) {
      signOut();
    }
    setLoading(false);
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: user!, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
