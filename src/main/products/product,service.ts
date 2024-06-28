import { faker } from '@faker-js/faker';
import { FindDto, ProductDto, UpdateDto } from './product.dto';
import { Product } from './product.model';
export const products: Product[] = [];

export const getProduct = (id: string) => {}

export const listProduct = (dto: FindDto): Product[] => {
  //dto.createdAt = faker.date.recent(); error solo lectura
  //dto.tags.push();
  //  dto.tags = ["s"]
  return products;
}

export const addProduct = (data: ProductDto): Product => {
  const newPrpduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  }
  products.push(newPrpduct);
  return newPrpduct;
}

export const updateProduct = (id: Product['id'], data: UpdateDto): Product => {
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    throw new Error('Product not found');
  }
  const updatedProduct = {...products[index], ...data, updatedAt: faker.date.recent() };
  products[index] = updatedProduct;
  return updatedProduct;
}

export const deleteProduct = (id: string) => {}
