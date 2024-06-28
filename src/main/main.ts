import { addProduct, listProduct, products, updateProduct } from "./products/product,service";
import { faker } from "@faker-js/faker";

for (let item = 0; item < 50; item++) {
  addProduct(
    {
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price({min: 1, max: 100 })),
      size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL', 'XXL']),
      images: faker.image.url(),
      isNew: faker.datatype.boolean(),
      stock: faker.number.int({ min: 0, max: 100 }),
      tags: faker.helpers.arrayElements(['tag1', 'tag2', 'tag3', 'tag4', 'tag5']),
      categoryId: faker.string.uuid(),
    }
  );
}

console.log(products);

const updatedProduct = products[0];

updateProduct(updatedProduct.id, {
  price: updatedProduct.price + 10,
  stock: updatedProduct.stock - 5,
});

listProduct({ id: updatedProduct.id });
