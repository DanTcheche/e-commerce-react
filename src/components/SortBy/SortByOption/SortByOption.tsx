export interface SortByOptionProps {
  value: string;
  text: string;
}

export const SortByOption = ({ value, text }: SortByOptionProps) => {
  return <option value={value}>{text}</option>;
};
