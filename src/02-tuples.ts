const prices: (string | number)[] = [10, "20", "30"];

let users: readonly [string, number, boolean];

users = ["John Doe", 25, true];

const [username, age, isAdmin] = users;

users

type Users = [string, number];
let users2: Users = ["John Doe", 25];

type User = readonly [string, number]; // solo lectura

let user: User;

user = ["John Doe", 25];
