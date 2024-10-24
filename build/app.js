"use strict";
class List {
    constructor(items) {
        this.items = items;
    }
}
class Accardion {
}
//asta asa facem daca folosim mostenirea
class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}
//acuma cu 'mixins'
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    };
}
class AccardionList {
    constructor(items) {
        this.items = items;
    }
}
const list = ExtendedList(AccardionList);
const res = new list(["first", "second"]);
console.log(res.first());
console.log(res.isOpen); //avem acces la 'isOpen'
