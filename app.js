"use strict";
const user = {
    name: "vasile",
    email: "vasili@gmail.com",
    login: "vasilica",
};
function logId(id) {
    if (isString(id)) { //se foloseste functia 'isString' TypeGuard
        console.log(id); //id este string
    }
    else {
        console.log(id); //id este number 
    }
}
//creem functei simpla de Type Guard
function isString(x) {
    return typeof x === "string";
}
//Functia typeGuard 'isAdmin'
function isAdmin(user) {
    return 'role' in user;
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error('utilizaturl nu este Admin');
    }
}
