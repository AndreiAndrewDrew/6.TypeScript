interface User {
  //inetrfatsa User
  name: string;
  age: number;
  skills: string[];

  log: (id: number) => string;
}

interface Role {
  roleId: number;
}

interface UserWithRole extends User, Role {
  createdAt: Date;
}

let user: UserWithRole = {
  name: "Andrew",
  age: 34,
  skills: ["1", "2"],
  roleId: 1,
  createdAt: new Date(),
  log(id) {
    return `Functia 'log' cu id=${id}`;
  },
};

console.log(user);
console.log(user.log(2));
console.log(user.roleId);
console.log(user.skills);

interface UserDictionary {
  [index: number]: User;
}

//Analog
type UserDictionary2 = {
  [index: number]: User;
};
