function logID(id: string | number): void {
  //void- asat inseamna ca nu intoarce nimik
  console.log(id);
}

const a = logID(1);

function multiply(f: number, s?: number) {
  if (!s) {
    return f * f;
  }
}

type voidFunction = () => void;

const f1: voidFunction = () => {};

const f2: voidFunction = () => {
  return true; //ce nu am intorce orcicum primim void
};

const b = f2() //b va fi de tip void

//exemplu de folosire a void
const skills =['Dev','DevOps']
const user ={
  s:['']
}

skills.forEach((skill) =>user.s.push(skill));
//forEach nu intoarce nimik, void