"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "Tranzactie reusita",
    statusCode: StatusCode.SUCCESS,
};
// 1 - tranzactie reusita
// 2 - tranzactie in process
// 3 - tranzactie respinsa
if (res.statusCode === StatusCode.SUCCESS) {
}
//exemplu 2
var StatusCode2;
(function (StatusCode2) {
    StatusCode2[StatusCode2["SUCCESS"] = 1] = "SUCCESS";
    StatusCode2["IN_PROCESS"] = "p";
    StatusCode2["FAILED"] = "f";
})(StatusCode2 || (StatusCode2 = {}));
const res2 = {
    message: "Tranzactie reusita",
    statusCode: StatusCode2.SUCCESS,
};
// s - tranzactie reusita
// p - tranzactie in process
// f - tranzactie respinsa
function action(status) { }
action(StatusCode2.SUCCESS);
action(1);
// action('p') //ne da euroare
function compute() {
    return 3;
}
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = compute()] = "USER";
})(Roles || (Roles = {}));
const res3 = 1 /* Roles3.ADMIN */;
