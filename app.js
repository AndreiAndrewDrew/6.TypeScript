"use strict";
function logID(id) {
    //void- asat inseamna ca nu intoarce nimik
    console.log(id);
}
const a = logID(1);
function multiply(f, s) {
    if (!s) {
        return f * f;
    }
}
const f1 = () => { };
const f2 = () => {
    return true; //ce nu am intorce orcicum primim void
};
const b = f2(); //b va fi de tip void
//exemplu de folosire a void
const skills = ['Dev', 'DevOps'];
const user = {
    s: ['']
};
skills.forEach((skill) => user.s.push(skill));
//forEach nu intoarce nimik, void
