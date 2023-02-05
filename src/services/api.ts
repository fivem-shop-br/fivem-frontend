import axios from "axios";
import { parseCookies } from "nookies";

export function setupApiClient(shopSlug?: string, ctx = undefined) {
  console.log(process.env.API_URL);
  const cookies = parseCookies(ctx)["fivem-shop.token"];
  const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      Authorization: cookies && `Bearer ${cookies}`,
    },

    params: shopSlug && {
      shopSlug,
    },
  });

  return api;
}
