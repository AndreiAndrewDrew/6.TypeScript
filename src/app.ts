let strOrNum: string | number;

if (Math.random() > 0.5) {
  strOrNum = 5;
} else {
  strOrNum = 'str';
}

if (typeof strOrNum === 'string') {
  console.log(strOrNum);
} else {
  console.log(strOrNum);
}

let strOrNum2: typeof strOrNum;

const user = {
  name: 'Vasile',
};

type keyOfUser = keyof typeof user;
//keia tipului userului

enum Direction {
  Up,
  Down,
}

type d = keyof typeof Direction;
