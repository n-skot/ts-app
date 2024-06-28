import { Category } from "../categories/category.model";
import { BaseModel } from "../base.model";

export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Product extends BaseModel {
  name: string,
  price: number,
  size?: Sizes,
  category: Category,
  stock: number,
  images: string,
  isNew: boolean,
  tags: string[]
}
