import { Category } from "./category";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  filterId: null;
}

export interface CreateProduct {
  title: string;
  description: string;
  price: number;
  categoryId: number;
  images: string[];
}
export type ProductId = number;
