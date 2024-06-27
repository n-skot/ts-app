import { Category } from "../categories/category.model";
import { BaseModel } from "../base.model";

export type Sizes = 'small' | 'medium' | 'large';

export interface Product extends BaseModel {
  name: string,
  price: number,
  size?: Sizes,
  category: Category,
}
