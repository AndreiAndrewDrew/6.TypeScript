interface User {
  name: string;
  age?: number;
  email: string;
}

type partial = Partial<User>; //toate cimpurile la userul nostru nu sunt obligatoriu
const p: partial = {};

type required = Required<User>; //le foace toate obligatorii
type readonly = Readonly<User>; //le face readonly
type requiredAndReadonly = Required<Readonly<User>>; //le face readonbly si oblogatorie
