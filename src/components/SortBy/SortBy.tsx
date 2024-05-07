import { SortByValues } from "@/enums/sortByValues";
import { SortByOption } from "./SortByOption";
import { ChangeEvent } from "react";

interface SortByProps {
  onValueChange: (value: string) => void;
}

interface SortByOption {
  value: string;
  text: string;
}

const options: SortByOption[] = [
  {
    value: SortByValues.Choose,
    text: "Choose an option",
  },
  {
    value: SortByValues.Cheaper,
    text: "Cheaper first",
  },
  {
    value: SortByValues.MoreExpensive,
    text: "More expensive first",
  },
  {
    value: SortByValues.NameAZ,
    text: "Name (A-Z)",
  },
  {
    value: SortByValues.NameZA,
    text: "Name (Z-A)",
  },
];

export const SortBy = ({ onValueChange }: SortByProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onValueChange(selectedValue);
  };
  return (
    <div className="max-w-sm mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        SortBy
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleChange}
      >
        {options.map((option) => (
          <SortByOption
            key={option.value}
            value={option.value}
            text={option.text}
          />
        ))}
      </select>
    </div>
  );
};
