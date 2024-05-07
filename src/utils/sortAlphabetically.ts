import { ProductSchema } from "@/schemas/ProductSchema";

export const sortAlphabetically = (items: ProductSchema[]): ProductSchema[] => {
  return [...items].sort((a, b) => {
    const titleA = a.title.toUpperCase(); // Ignore case
    const titleB = b.title.toUpperCase(); // Ignore case

    if (titleA < titleB) {
      return -1; // titleA comes before titleB
    }
    if (titleA > titleB) {
      return 1; // titleA comes after titleB
    }
    return 0;
  });
};
