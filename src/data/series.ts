import type { Series } from "$lib/props";
import { products } from "./product";

export const series: Series[] = [
  { id: 0, name: "All", title: "All Products" }, // 添加 "All" 选项
  ...Array.from(
    new Map(
      products.map((p) => [p.category.series.id, p.category.series]),
    ).values(),
  ),
];
