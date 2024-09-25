enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS,
  FAILED,
}

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

enum StatusCode2 {
  SUCCESS = 1,
  IN_PROCESS = "p",
  FAILED = "f",
}

const res2 = {
  message: "Tranzactie reusita",
  statusCode: StatusCode2.SUCCESS,
};

// s - tranzactie reusita
// p - tranzactie in process
// f - tranzactie respinsa

function action(status: StatusCode2) {}

action(StatusCode2.SUCCESS);
action(1);
// action('p') //ne da euroare

function compute() {
  return 3;
}

enum Roles {
  ADMIN = 1,
  USER = compute(),
}

//Exemplu 3
const enum Roles3{
  ADMIN = 1,
  USER = 2
}

const res3 = Roles3.ADMIN