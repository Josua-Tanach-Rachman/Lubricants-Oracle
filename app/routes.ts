import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home/Home.tsx"),
  route("03", "pages/03_Product_search_result/03A.tsx"),
] satisfies RouteConfig;
