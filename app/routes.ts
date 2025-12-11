import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home/Home.tsx"),
  route("03", "pages/03_Product_search_result/03A.tsx"),
  route("details", "pages/Product_Range/product_range.tsx"),
  route("test", "pages/testingProductPage.tsx"),
  route("04", "pages/04_Product_Family/04A.tsx"),
] satisfies RouteConfig;
