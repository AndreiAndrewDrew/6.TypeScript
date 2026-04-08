interface IUser {
  name: string;
  age: number;
}

type KeysOfUser = keyof IUser;

const key: KeysOfUser = 'age'; //putem atribuie numai keie existenta

//Exemplu de aplicarea "keyof"
function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user: IUser = {
  name: 'Vasile',
  age: 32,
};

const userName = getValue(user, 'name');
//dar aici in loc de "name", putem face greseala
//iata aici e si nevoie de "keyof", adica in fucntie mai sus
const userAge = getValue(user, 'age');

console.log('Nume-User:', userName + ';');
console.log('Virsta-User:', userAge + ' ani.');
