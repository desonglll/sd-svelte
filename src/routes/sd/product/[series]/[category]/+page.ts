import type { PageLoad } from "./$types";
import { categories } from "../../../../../data/category";

export const load: PageLoad = ({ params }) => {
  if (params.category) {
    const result = categories.find((item) => item.name === params.category);
    if (result) {
      return result;
    }
  }
};
