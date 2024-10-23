function test(a: number): number | undefined {
  if (a > 0) {
    return a;
  }
}

//Exemplu 2
function test2(a: number) {
    return a;
}

type StrOrNumFunct = (a: number | string) => number;

// let f:StrOrNumFunct = test2;

