interface User {
  name: string;
}

interface User {
  age: number,

}

const user :User ={
  name:'andrew',
  age: 35
}

console.log(user)

//analog cu 'type'
// type User2 = { //deja type asa nu poate ne da eroare
//   name: string;
// }

// type User2 = {//ne da eroare: dublicate la identificator
//   age: number,

// }

// const user2 :User2 ={
//   name:'andrew2',
//   age: 36
// }

// console.log(user2) 

//avantajele lui type
type ID = string | number

//analog cu interface
interface IDi {
  ID: string | number
}

/* Recomandatsie 
Pentru toate obiectele de folosit 'Inetrface',
dar cind ne trebuie type alias cu tupiuri primitive 
atunci folosim 'type,*/