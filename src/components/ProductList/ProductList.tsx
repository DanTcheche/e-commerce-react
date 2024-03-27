import { ReactNode } from "react";

interface ProductListProps {
  children: ReactNode;
}

export const ProductList = ({ children }: ProductListProps): ReactNode => {
  return <ul>{children}</ul>;
};
