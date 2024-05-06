import { useQuery } from "@tanstack/react-query";
import { ProductList } from "@/components/ProductList";
import { getProducts } from "@/api/getProducts";
import { Product } from "@/components/Product";
import { SearchBar } from "../SearchBar";
import { useEffect, useState } from "react";
import { SortBy } from "../SortBy";

export const Home = () => {
  const { data: products } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });

  const [filter, setFilter] = useState<string | undefined>();
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);

  const filteredProducts = products
    ? products.filter((product) =>
        product.title.toLowerCase().includes(filter || "")
      )
    : [];

  const handleFavorite = (key: string) => {
    if (favoriteProducts.includes(key)) {
      setFavoriteProducts(favoriteProducts.filter((element) => element != key));
    } else {
      const updatedFavorites = [...favoriteProducts, key];
      setFavoriteProducts(updatedFavorites);
    }
  };
  return (
    <>
      <div className="flex">
        <SearchBar onValueChange={(value: string) => setFilter(value)} />
        <SortBy />
      </div>

      <ProductList>
        {filteredProducts &&
          filteredProducts.map((item) => (
            <Product
              key={item.title}
              product={item}
              handleFavorite={() => handleFavorite(item.title)}
              isFavorite={favoriteProducts.includes(item.title)}
            />
          ))}
      </ProductList>
    </>
  );
};
