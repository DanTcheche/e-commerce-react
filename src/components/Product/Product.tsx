import { ProductSchema } from "@/schemas/ProductSchema"

interface ProductProps {
  product: ProductSchema
}

export const Product = ({product}: ProductProps) => {
  return (
    <li>{product.title}</li>
  )
}
