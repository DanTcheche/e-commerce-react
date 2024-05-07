export interface SortByOptionsProps {
  value: string;
  text: string;
}

export const SortByOptions = ({ value, text }: SortByOptionsProps) => {
  return <option value={value}>{text}</option>;
};
