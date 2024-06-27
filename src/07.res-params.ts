import { ROLE, UserWithRole } from "./01-emun";

const currentUser: UserWithRole = {
  username: "john_doe",
  id: 1,
  role: ROLE.ADMIN,
}

export const getUserRole = (user: UserWithRole) => {
  if (user.role === ROLE.ADMIN) {
    console.log("Tiene permisos de administrador");
    return true;
  } else {
    return false;
  }
}

getUserRole(currentUser);

const checkRole = (user: UserWithRole, role: ROLE) => {
  if (user.role === role) {
    console.log("El usuario tiene el rol correcto");

  }
  return false;
}

const checkRolev2 = (user: UserWithRole, role: ROLE[]) => {
  if (role.includes(user.role)) {
    console.log("El usuario tiene el rol correcto");

  }
  return false;
}

const checkRolev3 = (user: UserWithRole, ...role: ROLE[]) => {
  console.log(`
    user: ${user.username}
    role: ${role}
    `);

  if (role.includes(user.role)) {
    console.log("El usuario tiene el rol correcto");

  }
  role
  return false;
}

checkRole(currentUser, ROLE.ADMIN);
checkRolev2(currentUser, [ROLE.ADMIN]);
checkRolev3(currentUser, ROLE.ADMIN, ROLE.USER); //?
