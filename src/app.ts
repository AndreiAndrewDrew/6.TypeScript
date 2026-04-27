class User {
  constructor(public id:number, public name:string){}
}

function getData(id:number):User {
  return new User(id, "Vasile")
}

type RT = ReturnType<typeof getData>

type PT = Parameters<typeof getData>