import { PropsWithChildren } from "react";

interface ProductListProps extends PropsWithChildren {}

export const ProductList = ({ children }: ProductListProps) => {
  return <div className="flex flex-wrap">{children}</div>;
};
