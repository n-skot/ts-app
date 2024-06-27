export const creatProduct = (
  id: number | string,
  isNew: boolean,
  stock?: number,
) => {
  return { id: id || "29817918729817929", stock: stock ?? 10, isNew: isNew ?? true };
}

export const creatProduct2 = (
  id: number | string,
  isNew: boolean = true,
  stock: number = 10,
) => {
  return { id: id || "29817918729817929", stock, isNew };
}

const x = creatProduct(1, true, 10);

console.log(x);

const xy = creatProduct(1, true);
console.log(xy);

const xyr = creatProduct('', false, 0);

const xyre = creatProduct2('');
const xyrer = creatProduct2('', false, 0);


console.log(xyr);
console.log(xyre);
console.log(xyrer);

// operador ||
// ''  ==> false
// 0  ==> false
// false  ==> false
