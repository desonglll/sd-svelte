import type { PageLoad } from "./$types";
import news from "../../../../data/news.json" with { type: "json" };
interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
}
export const load: PageLoad = async ({ params }) => {
  const newsData: NewsItem[] = news;
  newsData.find((item) => item.id === params.id);
  return {
    news: newsData[0],
  };
};
