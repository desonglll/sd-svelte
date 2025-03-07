import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  if (params.slug) {
    return {
      title: "Hello world!",
      content: params.slug,
    };
  }
};
