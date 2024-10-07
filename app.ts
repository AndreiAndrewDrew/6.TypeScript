let a = 5;
let b:string = a.toString();

//cu asa converatare sa fim atentsi
let e:string = new String(a).valueOf();
//Avem tip 'string', si avem 'String' cu litera mare car este constructor de obiecte
let f: boolean = new Boolean(a).valueOf();

let c = 'dasfsf';
let d: number = parseInt(c);

interface User{
  name: string;
  email:string;
  login: string;
}

//Metoda 1 de creeeare a 'user' de tip 'User'
const user: User ={
  name: 'vasile',
  email: 'vasili@gmail.com',
  login:'vasilica'
}

//Metoda 2
const user2 = {
  name: 'vasile2',
  email: 'vasili2@gmail.com',
  login:'vasilica2'
} as User

//Metoda 3 (Nu se recomanda de folosit)
const user3 = <User> {
  name: 'vasile3',
  email: 'vasili3@gmail.com',
  login:'vasilica3'
} 

interface Admin{
  name: string;
  role: number;
}

//Convertam 'user' nostru in 'admin'
//Metoda 1 (Minusul acestei metode ii salvam la admin cimurile de la user)
const admin: Admin = {
  ...user,
  role:1
}

//Metoda 2 Care este Corecta in cazul dat
//functia 'userToAdmin' cere converteaza numai cimpurile de care avem nevoie
function userToAdmin(user: User):Admin{
  return{
    name: user.login,
    role:1
  }
}