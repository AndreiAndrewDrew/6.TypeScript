class User{
  name: string;
  age: number;

  constructor();
  constructor(name:string)
  constructor(age: number);
  constructor(name:string, age:number);
  //constructor de implementare
  constructor(ageOrName?:string | number, age?:number){
    if (typeof ageOrName === 'string'){
      this.name = ageOrName;
    }else if(typeof ageOrName === 'number'){
      this.age = ageOrName
    }
    if (typeof age === 'number'){
      this.age =age
    }
  }
}

const user1 = new User()
console.log(user1)
const user2 = new User('Vasea')
console.log(user2)
const user3 = new User(33)
console.log(user3)
const user4 = new User('Andrew',38)
console.log(user4)
