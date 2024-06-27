let anyVar: any;

anyVar = 123;
anyVar = "Hello, TypeScript!";
anyVar = true;
anyVar = [1, 2, 3];

let unknownVar: unknown;

unknownVar = 123;
unknownVar = "Hello, TypeScript!";
unknownVar = true;
unknownVar = {name: "rick"};

if (typeof unknownVar === "string") {
  console.log(unknownVar.toUpperCase());
}

if (typeof unknownVar === "boolean") {
  let isNew: boolean = unknownVar;
}


const parse = (string: string): unknown => {
  return JSON.parse(string);
}

