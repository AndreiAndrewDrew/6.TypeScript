"use strict";
const userAndrew = {
    login: "andrew@g,ail.com",
    password: "123", //putem sa nu indicam cimpul cu parola
};
//exemplu 2
function multiply(fisrt, second) {
    //second il facem optional
    if (!second) {
        return fisrt * fisrt;
    }
    return fisrt * second;
}
console.log(multiply(5));
console.log(multiply(5, 6));
function testPassword(userAndrew2) {
    var _a;
    const t = (_a = userAndrew2.password) === null || _a === void 0 ? void 0 : _a.type;
    console.log(t);
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
    console.log(t);
}
