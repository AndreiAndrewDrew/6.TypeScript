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
