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
  images: string[];
}
export interface UpdateProduct {
  title: string;
  price: number;
  description: string;
  id: number;
}
export type ProductId = number;
