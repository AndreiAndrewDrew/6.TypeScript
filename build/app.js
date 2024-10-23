"use strict";
function logMiddleware(data) {
    //prima functie care lucreaza cu genericul
    console.log(data);
    return data;
}
const res = logMiddleware(10);
//Exemolu 2
function getSplitedHalf(masiv) {
    const lungJumMasiv = masiv.length / 2;
    return masiv.splice(0, lungJumMasiv);
    // return masiv.splice(lungJumMasiv,masiv.length);
}
console.log(getSplitedHalf([1, 2, 3, 4]));
console.log(getSplitedHalf([1, 3, "dasd", true, "232", 23, 24, 6]));
