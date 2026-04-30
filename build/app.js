"use strict";
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUserInDatabase() {
        return this.users;
    }
}
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
function logUser(obj) {
    console.log('Users: ' + obj.users);
    return obj;
}
console.log(new UserService().getUserInDatabase());
console.log(nullUser(new UserService()).getUserInDatabase());
console.log(logUser(nullUser(new UserService())).getUserInDatabase());
console.log(nullUser(logUser(new UserService())).getUserInDatabase());
