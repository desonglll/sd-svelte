import type { Category, Product, Series } from "$lib/props";
import static_data from "../data/tooth.json";

const demo = [
  {
    id: 1,
    navs: [
      {
        id: 1,
        series: [
          {
            id: 1,
            name: "d-series",
            title: "d-series",
          },
          {
            id: 2,
            name: "dayu-series",
            title: "dayu-series",
          },
          {
            id: 3,
            name: "cater-series",
            title: "cater-series",
          },
          {
            id: 4,
            name: "hitachi-series",
            title: "hitachi-series",
          },
          {
            id: 5,
            name: "kobelco-series",
            title: "kobelco-series",
          },
          {
            id: 6,
            name: "volvo-series",
            title: "volvo-series",
          },
          {
            id: 7,
            name: "hyundai-series",
            title: "hyundai-series",
          },
          {
            id: 8,
            name: "komatsu-series",
            title: "komatsu-series",
          },
          {
            id: 9,
            name: "xiaozi",
            title: "xiaozi",
          },
          {
            id: 10,
            name: "combined",
            title: "combined",
          },
        ],
        name: "series",
        title: "产品系列",
        slug: "series",
      },
    ],
    name: "product",
    title: "Product Range",
    content:
      "Welcome to the Shunde Machinery Parts Product Series section! We provide a wide range of construction machinery parts, including different types of bucket teeth from well-known brands such as Carter and Komatsu, to meet various construction needs. Whether it is wear-resistant, reinforced or standard bucket teeth, you can find the right product here. Through this section, you can quickly browse various accessories, learn about product details, and help your equipment operate efficiently!",
    image: "/bucket.jpg",
    slug: "product",
  },
  {
    id: 2,
    navs: [],
    name: "about",
    title: "About Us",
    content:
      "SHUNDE MECHANICAL PARTS CO.,LTD is a professional machinery fittings manufacturer integrating R&D, production and sales. Located in the beautiful coastal city of Rizhao, the company covers an area of 60,000 square metres, with modern production workshops and advanced manufacturing equipment, and has strong independent research and development and production capacity. With an annual production capacity of 15,000 tonnes, the company is able to independently develop and produce more than 6,000 sets of all kinds of machinery parts, covering a wide range of industries to meet the diversified needs of customers.",
    image: "/about-hero.jpg",
    slug: "about",
  },
  {
    id: 3,
    navs: [],
    name: "news",
    title: "Company News",
    content:
      "Welcome to the Shunde Machinery Parts News section! Here we carefully present the latest trends and authoritative information in the industry, including technological innovations, market trends, major projects and corporate dynamics. Through this preview card, you can quickly capture the most cutting-edge information, fully understand the latest developments in the field of Shunde Machinery Parts, and provide timely and accurate references for your decision-making and research.",
    image: "/news.png",
    slug: "news",
  },
];

export default demo;

export const products: Product[] = static_data;
export const series: Series[] = [
  { id: 0, name: "All", title: "All Products" }, // 添加 "All" 选项
  ...Array.from(
    new Map(
      products.map((p) => [p.category.series.id, p.category.series]),
    ).values(),
  ),
];

export const categories: Category[] = Array.from(
  new Map(products.map((p) => [p.category.id, p.category])).values(),
);
