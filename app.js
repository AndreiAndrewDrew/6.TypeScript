"use strict";
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
//Analog cu functie sageata
const getFullNameArrow = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
console.log(getFullName('Andrew', 'Boll'));
const user = {
    firstname: 'Timo',
    surname: 'Boll',
    city: 'Berlin',
    age: 41,
    skills: {
        dev: true,
        devops: true
    }
};
function getNameUser(userEntity) {
    userEntity.age = 45;
    return `${userEntity.firstname} ${userEntity.surname} traieste in ${userEntity.city}, are ${userEntity.age} de ani.`;
}
console.log(getNameUser(user));
