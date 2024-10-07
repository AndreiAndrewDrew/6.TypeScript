let input: unknown; //declaram o vriabila 'input' de tip unknown

input = 3;
input = ["dads", "rwwef"];

// let res:string = input; //ne da eroare
//pute sa includem tipul 'unknown' numai in 'unknown' sau in 'any'
let res: any = input; //asa nu ne da eroare

//alt exemplu
function run(i: unknown) {
  if (typeof i == "number") {
    i++;
  } else {
    i;
  }
}

run(input);

//exemplu de folosire in practica a tipului 'unknow'
async function getData() {
  try {
    await fetch("");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

type U1 = unknown | number; //union, U1 devine tat timpul 'unknown'

type I1 = unknown & string; //intersection, I1 este 'string'