function main(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const array2 = main("Hello World");
const array1 = main(array2);

typeof array1 === 'string'? console.log(array1.toUpperCase()) : console.log(array1.reverse());

console.log(array1);
console.log(array2);
