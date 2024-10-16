"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searcByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(', ');
    }
}
const users = new Users();
users.push(new User('Andrew'));
users.push(new User('Vasile'));
users.push(new User('Aliona'));
console.log(users.toString());
