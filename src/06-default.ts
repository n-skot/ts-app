export const creatProduct = (
  id: number | string,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return { id, stock, isNew };
}

export const creatProduct2 = (
  id: number | string,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return { id: id || "29817918729817929", stock, isNew };
}

console.log(creatProduct(1, true, 10));
console.log(creatProduct(1));
console.log(creatProduct(1, false, 10));
