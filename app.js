"use strict";
let user = {
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
