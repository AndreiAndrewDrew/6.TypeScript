"use strict";
class Payment {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const p1 = new Payment();
const user = {
    id: 1,
    paymentDate: p1.getDate.bind(p1),
    paymentDateArrow: p1.getDateArrow
};
// console.log(p1.getDate())
// console.log(user.paymentDate())
// console.log(user.paymentDateArrow())
class PaymentPersistent extends Payment {
    save() {
        // return super.getDate() //cu super apelam la clasa parinte, adica din 'Payment';
        return this.getDateArrow(); //ca sa apelam la functie strelocinaiae, apelam cu 'this'
    }
}
console.log(new PaymentPersistent().save());
