class User{
  name: string;

  constructor(name:string){
    this.name = name;
  }
}

const utilizator = new User('Vasea')
console.log(utilizator)
utilizator.name = 'Petrica'
console.log(utilizator)

class Admin{//declaram fara constructor,
  //pentru asta este ncesar in fisierul 'tsconfig.json'
  //Gasim cimpul "strictPropertyInitialization" po default el este 'true',
  //Il descomentam si ii atribuim valoare 'false'. 
  //Rezulta ca de constructor nu este deja necesar!!!
  role: number;
}

const administrator = new Admin()
administrator.role =1
console.log(administrator);
console.log(administrator.role)

