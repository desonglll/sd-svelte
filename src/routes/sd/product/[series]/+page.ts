import type { PageLoad } from "./$types";
import series from "../../../../data/json/series.json";

export const load: PageLoad = ({ params }) => {
  if (params.series) {
    const result = series.find((item) => item.name === params.series);
    if (result) {
      return result;
    }
  }
};
