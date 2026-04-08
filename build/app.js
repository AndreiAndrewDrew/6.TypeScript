"use strict";
const key = 'age'; //putem atribuie numai keie existenta
//Exemplu de aplicarea "keyof"
function getValue(obj, key) {
    return obj[key];
}
const user = {
    name: 'Vasile',
    age: 32,
};
const userName = getValue(user, 'name');
//dar aici in loc de "name", putem face greseala
//iata aici e si nevoie de "keyof", adica in fucntie mai sus
const userAge = getValue(user, 'age');
console.log('Nume-User:', userName + ';');
console.log('Virsta-User:', userAge + ' ani.');
