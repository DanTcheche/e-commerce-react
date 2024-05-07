import { useQuery } from "@tanstack/react-query";
import { ProductList } from "@/components/ProductList";
import { getProducts } from "@/api/getProducts";
import { Product } from "@/components/Product";
import { SearchBar } from "../SearchBar";
import { useState } from "react";
import { SortBy } from "../SortBy";
import { ProductSchema } from "@/schemas/ProductSchema";
import { SortByValues } from "@/enums/sortByValues";
import { sortAlphabetically } from "@/utils/sortAlphabetically";

export const Home = () => {
  const { data: products } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });

  const [filter, setFilter] = useState<string | undefined>();
  const [sortBy, setSortBy] = useState<string | undefined>();
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);

  const handleFilters = (): ProductSchema[] => {
    if (products) {
      let sortedFilteredProducts: ProductSchema[] = products;
      if (sortBy) {
        if (sortBy == SortByValues.Cheaper) {
          sortedFilteredProducts = [...products].sort(
            (a, b) => a.price - b.price
          );
        }
        if (sortBy == SortByValues.MoreExpensive) {
          sortedFilteredProducts = [...products].sort(
            (a, b) => b.price - a.price
          );
        }
        if (sortBy == SortByValues.NameAZ) {
          sortedFilteredProducts = sortAlphabetically(sortedFilteredProducts);
        }
        if (sortBy == SortByValues.NameZA) {
          sortedFilteredProducts = sortAlphabetically(
            sortedFilteredProducts,
            "descending"
          );
        }
      }

      sortedFilteredProducts = sortedFilteredProducts.filter((product) => {
        return product.title.toLowerCase().includes(filter || "");
      });

      return sortedFilteredProducts;
    }
    return [];
  };

  const filteredProducts = handleFilters();

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
        <SearchBar
          onValueChange={(value: string) => setFilter(value.toLowerCase())}
        />
        <SortBy onValueChange={(value: string) => setSortBy(value)} />
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
