"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const utilizator = new User('Vasea');
console.log(utilizator);
utilizator.name = 'Petrica';
console.log(utilizator);
class Admin {
}
const administrator = new Admin();
administrator.role = 1;
console.log(administrator);
console.log(administrator.role);
