import { destroyCookie, parseCookies } from "nookies";
import { api } from "./api-client";

export async function getMe() {
  const cookie = parseCookies();
  if (cookie["fivem-shop.token"]) {
    try {
      const { data } = await api.get("me");
      return data;
    } catch (err) {
      destroyCookie(undefined, "fivem-shop.token");
    }
  }
  return null;
}

export async function getShops() {
  const cookie = parseCookies();
  if (cookie["fivem-shop.token"]) {
    try {
      const { data } = await api.get("shops");
      return data;
    } catch (err) {
      destroyCookie(undefined, "fivem-shop.token");
    }
  }
  return null;
}

export async function getShop(id: string) {
  const cookie = parseCookies();
  if (cookie["fivem-shop.token"]) {
    try {
      const { data } = await api.get("shop/" + id);
      return data;
    } catch (err) {
      throw new Error("Servidor não encontrado.");
    }
  }
  return null;
}
