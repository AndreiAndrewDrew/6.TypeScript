class User {
  name: string 

  constructor(name: string) {
    this.name = name;
  }
}

//Mostenire
class Users extends Array<User>{
  searcByName(name: string){
    return this.filter(u=>u.name === name);
  }

  override toString(): string{
    return this.map(u=>u.name).join(', ')
  }
}
//End Mostenire

const users = new Users();
users.push(new User('Andrew'))
users.push(new User('Vasile'))
users.push(new User('Aliona'))
console.log(users.toString())

//Compozitie
class UsersList{
  users: User[];

  push(u: User){
    this.users.push(u);
  }
}
//end Compozitsie


//Exemplu 2

class Payment{
  date:Date;
}

class UserWithPayment extends Payment{ //mostenire
  name:string;
}

class UserWithPayment2 {//Compozitsie
  user: User;
  payment: Payment;

  constructor(user: User, payment: Payment){
    this.payment = payment;
    this.user = user;
  }

}