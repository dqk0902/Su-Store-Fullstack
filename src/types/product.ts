import { Category } from "./catgory";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface CreateProduct {
  title: string;
  description: string;
  price: number;
  categoryId: number;
  images: string[];
}
