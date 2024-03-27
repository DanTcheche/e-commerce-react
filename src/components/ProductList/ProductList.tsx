import { ReactNode } from "react";

interface ProductListProps {
  children: ReactNode;
}

export const ProductList = ({ children }: ProductListProps) => {
  return <ul>{children}</ul>;
};
