import { Product } from './product.model';
export const products: Product[] = [];

export const product = (data: Product) => {
  products.push(data);
}
