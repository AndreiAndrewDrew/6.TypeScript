function logMiddleware<T>(data: T): T {
  //prima functie care lucreaza cu genericul
  console.log(data);
  return data;
}

const res = logMiddleware<number>(10);

//Exemolu 2
function getSplitedHalf<T>(masiv: Array<T>): Array<T> {
  const lungJumMasiv = masiv.length / 2;
  return masiv.splice(0,lungJumMasiv);
  // return masiv.splice(lungJumMasiv,masiv.length);
}

console.log(getSplitedHalf<number>([1, 2, 3, 4]));

console.log(getSplitedHalf([1, 3, "dasd", true, "232", 23, 24, 6]));
