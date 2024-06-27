export enum ROLE {
  ADMIN = "admin",
  USER = "user",
}

export type UserWithRole = {
  id: number;
  username: string;
  role: ROLE;
}

const n_skot: UserWithRole = {
  id: 1,
  username: "n_skot",
  role: ROLE.ADMIN,
}
