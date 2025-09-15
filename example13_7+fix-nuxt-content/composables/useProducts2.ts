import { slugify } from "@/untils/slugify";

export const useProducts2 = () => {
  const products = ref([
    { id: 1, name: "Điện thoại iPhone 15", price: 25990000 },
    { id: 2, name: "Laptop MacBook Air M2", price: 28990000 },
    { id: 3, name: "Tai nghe AirPods Pro", price: 5990000 },
  ]);

  const getProductBySlug = (slug: string) => {
    return products.value.find((p) => slugify(p.name) === slug);
  };

  return { products, getProductBySlug };
};
