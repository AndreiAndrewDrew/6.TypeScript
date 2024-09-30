interface User {
  login: string;
  password?: string; //'?' parola este optionala
}

const userAndrew: User = {
  login: "andrew@g,ail.com",
  password: "123", //putem sa nu indicam cimpul cu parola
};


//exemplu 2
function multiply(fisrt: number, second?: number):number {
  //second il facem optional
  if (!second){
    return fisrt * fisrt
  }
  return fisrt * second
}

console.log(multiply(5))
console.log(multiply(5,6))

//exemplu 3
interface UserPro {
  login: string;
  password?: {
    type: 'primary' | 'secundary'
  }
}

function testPassword(userAndrew2 : UserPro){
  const t = userAndrew2.password?.type;
  console.log(t)
}

function test(param?: string){
  const t= param ?? multiply(5)
  console.log(t)
}

