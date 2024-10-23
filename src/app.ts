const num: Array<number> = [1, 2, 3]; //<number> identificam ca este masiv de numere

async function test() {
  const p = new Promise<number>((resolve, reject) => {
    resolve(1);
  });
}

const check: Record<string, boolean> ={
  drive: true,
  kpp: false,
};