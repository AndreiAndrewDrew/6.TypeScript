"use strict";
/*
Trebuie de scris functia 'toString' care primeste orice tip de date,
si intoarce string din aceste date. Dar daca nu reuseste intoarce 'undefined'
 */
function toString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case "string":
            return data;
        case "number":
        case "symbol":
        case "bigint":
        case "boolean":
        case "function":
            return data.toString();
        case "object":
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(3);
console.log(true);
console.log('Andrew');
console.log(['a', 'b', 'c']);
console.log({ a: 1, b: 2 });
console.log({ c: 10 });
