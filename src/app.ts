type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
  constructor(public items: string[]) {}
}

class Accardion {
  isOpen: boolean;
}

type ListType = GConstructor<List>;
type AccardionType = GConstructor<Accardion>;

//asta asa facem daca folosim mostenirea
class ExtendedListClass extends List {
  first() {
    return this.items[0];
  }
}

//acuma cu 'mixins'
function ExtendedList<TBase extends ListType & AccardionType>(Base: TBase) {
  return class ExtendedList extends Base {
    first() {
      return this.items[0];
    }
  };
}

class AccardionList{
  isOpen: boolean;
  constructor(public items: string[]) {}
}

const list = ExtendedList(AccardionList);
const res = new list(["first", "second"]);
console.log(res.first());
console.log(res.isOpen);//avem acces la 'isOpen'

