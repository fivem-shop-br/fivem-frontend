import { setupApiClient } from "./api";
export const api = setupApiClient();
export const apiShop = (shopSlug?: string) => setupApiClient(shopSlug);
