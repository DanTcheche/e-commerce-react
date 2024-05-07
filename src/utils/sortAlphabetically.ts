import { ProductSchema } from "@/schemas/ProductSchema";

export const sortAlphabetically = (
  items: ProductSchema[],
  order: string = "ascending"
): ProductSchema[] => {
  return [...items].sort((a, b) => {
    const titleA = a.title.toUpperCase(); // Ignore case
    const titleB = b.title.toUpperCase(); // Ignore case

    if (order == "ascending") {
      if (titleA < titleB) {
        return -1; // titleA comes before titleB
      }
      if (titleA > titleB) {
        return 1; // titleA comes after titleB
      }
    }
    if (order == "descending") {
      if (titleB < titleA) {
        return -1; // titleA comes before titleB
      }
      if (titleB > titleA) {
        return 1; // titleA comes after titleB
      }
    }

    return 0;
  });
};
