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
        console.log('Valoare keiei "a" =', obj.a);
        console.log('Obiectul a =', obj);
    }
    else {
        console.log('Valoare keiei "b" =', obj.b);
        console.log('Obiectul b =', obj);
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
logId(1);
logId("Primul Id");
logId(true);
logError('eroare 1');
logError(['Erore 1', 'Eroare 2']);
logObject({ a: 4 });
logObject({ b: 7 });
logMultipleIds('AndreW', 'AndreW');
logMultipleIds(1, true);
