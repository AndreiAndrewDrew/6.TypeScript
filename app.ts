type hhtpMethod = "post" | "get";

type coolString = string;
//Alias aduagtor pentru string

function fetchWithAuth(url: string, method: hhtpMethod) {
  return 1;
}

fetchWithAuth("s", "get");

let methode = "post";

fetchWithAuth("s", methode as "post");

//Exemplu 2 Tipizatsia Obiectelor
type User = {
  name: string; //daca si aici este cimp name
  age: number;
  skills: string[];
};

type Role ={
  name: string; //si aici avem cimp name
  id: number;
}

type UserWithRole = User & Role; //Intersectie a 2 tipizatsii


let user: UserWithRole = {
  name: "Andrew", //declaram odata name, e
  age: 34,
  skills: ["1", "2"],
  id: 1
};
