function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

//Analog cu functie sageata
const getFullNameArrow = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

console.log(getFullName('Andrew', 'Boll'));

const user = {
  firstname: 'Timo',
  surname: 'Boll',
  city: 'Berlin',
  age: 41,
  skills: {
    dev:true,
    devops:true
  }
};

function getNameUser(userEntity:{firstname:string, surname:string, city:string, age:number}):string{
  userEntity.age=45;
  return `${userEntity.firstname} ${userEntity.surname} traieste in ${userEntity.city}, are ${userEntity.age} de ani.`
}

console.log(getNameUser(user))