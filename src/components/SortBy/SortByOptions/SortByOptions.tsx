import { MouseEventHandler } from "react";

export interface SortByOptionsProps {
  value: string;
  text: string;
  onClick: MouseEventHandler<HTMLOptionElement>;
}

export const SortByOptions = ({ value, text, onClick }: SortByOptionsProps) => {
  return (
    <option value={value} onClick={onClick}>
      {text}
    </option>
  );
};
