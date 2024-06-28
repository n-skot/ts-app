import { Product } from "./product.model";

export interface ProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
  categoryId: string;
}

export interface ProductPick extends Pick<Product, "name" | "price"> {}

export interface UpdateDto extends Partial<ProductDto> {}

export interface UpdateRequiredDto extends Required<ProductDto> {}

export interface FindDto extends Readonly<Partial<Omit<Product, "tags">>> {
  readonly tags: ReadonlyArray<string>
}
