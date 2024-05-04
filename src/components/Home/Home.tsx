import { useQuery } from "@tanstack/react-query";
import { ProductList } from "@/components/ProductList";
import { getProducts } from "@/api/getProducts";
import { Product } from "@/components/Product";
import { SearchBar } from "../SearchBar";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";

export const Home = () => {
  const { data: products } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
  const [filter, setFilter] = useState<string | undefined>();

  let searchedProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(filter || "")
  );
  const handleFilterChange = () => {
    searchedProducts = products?.filter((product) =>
      product.title.toLowerCase().includes(filter || "")
    );
  };
  useDebounce({ value: filter, handleChange: handleFilterChange });
  return (
    <>
      <SearchBar onValueChange={(value: string) => setFilter(value)} />
      <ProductList>
        {searchedProducts &&
          searchedProducts.map((item, key) => (
            <Product key={key} product={item} />
          ))}
      </ProductList>
    </>
  );
};
