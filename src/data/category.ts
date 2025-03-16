import type { Category } from "$lib/props";
import { products } from "./product";

export const categories: Category[] = Array.from(
  new Map(products.map((p) => [p.category.id, p.category])).values(),
);
