const whitoutEnd = () => {
  while (true) {
    console.log("Nunca pares de aprender!");

  }
};

const fail = (message: string) => {
  throw new Error(message);
}

const ejemplo = (input: unknown) => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (Array.isArray(input)) {
    return "Este es un array";
  } else {
    return fail("No hizo match con un string o un array");

  }
}

console.log(ejemplo("n_skot"));
console.log(ejemplo([1, 2, 3]));
console.log(ejemplo(2));
console.log(ejemplo("Despues de un error"));
