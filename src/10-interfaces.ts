type Sizes = 'small' | 'medium' | 'large';
/*type Product = {
  id: number,
  name: string,
  price: number,
  size?: Sizes,
}*/

interface Product {
  id: number,
  name: string,
  price: number,
  size?: Sizes,
}

const products: Product[] = [];

products.push({ id: 1, name: 'Shirt', price: 19.99, size: 'medium' });

const product = (data: Product) => {
  products.push(data);
}
