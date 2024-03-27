import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { ProductList } from "@/components/ProductList";
import { getProducts } from "@/api/getProducts";
import { Product } from "@/components/Product";

const App = () => {
  const { data: products } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });
  return (
    <ProductList>
      {products &&
        products.map((item, key) => <Product key={key} product={item} />)}
    </ProductList>
  );
};

export default App;
