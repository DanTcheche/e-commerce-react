import { ReactNode } from "react";

interface ProductListProps {
  children: ReactNode;
}

export const ProductList = ({ children }: ProductListProps) => {
  return <div className="flex flex-wrap">{children}</div>;
};
