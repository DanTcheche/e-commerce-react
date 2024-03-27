import { ProductSchema } from "@/schemas/ProductSchema";
import { api } from "./axios";

interface ProductsResponse {
  limit: number
  products: ProductSchema[]
  skip: number
  total: number
}

export const getProducts = async () => {
  const res = await api.get<ProductsResponse>("/products");
  return res.data.products;
}
