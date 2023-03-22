import { Category } from "./category";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  filterId: null;
}

export interface CreateProductType {
  title: string;
  description: string;
  price: number;
  categoryId: number;
  image: string;
  orderId: number;
}
export interface UpdateProduct {
  title: string;
  description: string;
  price: number;
  categoryId: number | undefined;
  image: string | undefined;
  orderId: number;
  id: number;
}
export type ProductId = number;
