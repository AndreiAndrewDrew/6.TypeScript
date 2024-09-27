"use strict";
function logId(id) {
    if (typeof id === "string") {
        console.log('id=', id.toUpperCase());
    }
    else if (typeof id === "number") {
        console.log('id=', id + 4);
    }
    else {
        console.log('id=', id);
    }
}
function logError(err) {
    if (Array.isArray(err)) {
        console.log('Eroare=', err);
    }
    else {
        console.log('Eroare=', err);
    }
}
function logObject(obj) {
    if ("a" in obj) {
        console.log('Valoare key "a" =', obj.a);
        console.log('Primul obiect =', obj);
    }
    else {
        console.log('Valoare key "b" =', obj.b);
        console.log('Al doilea obiect =', obj);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
        //daca sunt echivalente lucram cu ele ca cu string
        console.log('a=', a.toLowerCase());
        console.log('b=', b.toUpperCase());
    }
    else {
        console.log('a=', a);
        console.log('b=', b);
    }
}
console.log('Exemplu 1 de Union(string | number | boolean):');
logId(1);
logId("Primul Id");
logId(true);
console.log('Exemplu 2 de Union(string | string[]):');
logError('eroare 1');
logError(['Erore 1', 'Eroare 2']);
console.log('Exemplu 3 de Union({ a: number } | { b: number }):');
logObject({ a: 4 });
logObject({ b: 7 });
console.log('Exemplu 4 de Union(a: string | number, b: string | boolean):');
logMultipleIds('AndreW', 'AndreW');
logMultipleIds(1, true);
