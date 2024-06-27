export function main(input: string): string[];
export function main(input: string[]): string;
export function main(input: number): boolean;

/*export function main(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}*/

export function main(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input ==='string') {
    return input.split('');
  } else if (typeof input === 'number') {
    return true;
  }
}

const array2 = main("Hello World");
const array1 = main(array2);

array1.toLocaleLowerCase();
array2.reverse();
// typeof array1 === 'string'? console.log(array1.toUpperCase()) : console.log(array1.reverse());

console.log(array1);
console.log(array2);

const main1 = main(123);
console.log('manual', main1);
