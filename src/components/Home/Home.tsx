import { useQuery } from "@tanstack/react-query";
import { ProductList } from "@/components/ProductList";
import { getProducts } from "@/api/getProducts";
import { Product } from "@/components/Product";
import { SearchBar } from "../SearchBar";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { ProductSchema } from "@/schemas/ProductSchema";

export const Home = () => {
  const { data: products } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });

  const [loadedProducts, setLoadedProducts] = useState<ProductSchema[]>();
  const [filteredProducts, setfilteredProducts] = useState<ProductSchema[]>();
  const [filter, setFilter] = useState<string | undefined>();

  useEffect(() => {
    if (products && products.length) {
      setLoadedProducts(products);
      setfilteredProducts(products);
    }
  }, [products]);

  const handleFilterChange = () => {
    const filteredProducts = loadedProducts
      ? loadedProducts.filter((product) =>
          product.title.toLowerCase().includes(filter || "")
        )
      : [];
    setfilteredProducts(filteredProducts);
  };
  const handleFavorite = (key: string) => {
    const updatedProducts = loadedProducts?.map((product) => {
      if (product.title === key) {
        return { ...product, isFavorite: !product.isFavorite };
      }
      return product;
    });
    setLoadedProducts(updatedProducts);
    handleFilterChange();
  };
  useDebounce({ value: filter, handleChange: handleFilterChange });
  return (
    <>
      <SearchBar onValueChange={(value: string) => setFilter(value)} />
      <ProductList>
        {filteredProducts &&
          filteredProducts.map((item) => (
            <Product
              key={item.title}
              product={item}
              handleFavorite={() => handleFavorite(item.title)}
            />
          ))}
      </ProductList>
    </>
  );
};
