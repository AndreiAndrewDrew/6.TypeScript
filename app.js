"use strict";
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    //typeGuard
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const res = new UserBuilder().setName("Vasile");
const res2 = new AdminBuilder().setName("Vasile Admin");
let user = new UserBuilder();
if (user.isAdmin()) {
    console.log(user);
}
else {
    console.log(user);
}
