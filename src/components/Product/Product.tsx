import { ProductSchema } from "@/schemas/ProductSchema";
import { MouseEventHandler } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

interface ProductProps {
  product: ProductSchema;
  isFavorite: boolean;
  handleFavorite: MouseEventHandler<HTMLButtonElement>;
}

export const Product = ({
  product,
  isFavorite,
  handleFavorite,
}: ProductProps) => {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 w-full object-contain object-center"
        src={product.images[0]}
        alt={product.title}
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-black text-gray-900">
          {product.title}
        </h2>
        <p>{product.description}</p>
        <div className="flex items-center">
          <p className="text-base font-medium text-gray-500 dark:text-black-300">
            {product.price} $
          </p>
          <button onClick={handleFavorite}>
            {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="red" />}
          </button>
        </div>
      </div>
    </div>
  );
};
