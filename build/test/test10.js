"use strict";
const form = {
    name: 'Vasile',
    password: '123',
    //   age: 34,
};
//rezultatul Validatiei - nu e princpial cu e formata functia de validatie
const formValidation = {
    name: { isValid: true },
    password: {
        isValid: false,
        erroMessage: 'Trebuie sa fie mai lung de 5 caractere',
    },
};
