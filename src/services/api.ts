import axios from "axios";
import { parseCookies } from "nookies";

export function setupApiClient(ctx = undefined) {
  const cookies = parseCookies(ctx)["fivem-shop.token"];
  const api = axios.create({
    baseURL: process.env.API_URL || "http://localhost:3000",
    headers: {
      Authorization: cookies && `Bearer ${cookies}`,
    },
  });

  return api;
}