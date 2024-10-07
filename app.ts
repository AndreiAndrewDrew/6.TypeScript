interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = {
  name: "vasile",
  email: "vasili@gmail.com",
  login: "vasilica",
};

interface Admin {
  name: string;
  role: number;
}

function logId(id: string | number) {
  if (isString(id)) { //se foloseste functia 'isString' TypeGuard
    console.log(id);//id este string
  } else {
    console.log(id);//id este number 
  }
}

//creem functei simpla de Type Guard
function isString(x: string | number): x is string{
  return typeof x === "string";
}

//Functia typeGuard 'isAdmin'
function isAdmin(user: User | Admin):user is Admin{
  return 'role' in user;
}

function isAdminAlternative(user: User | Admin):user is Admin{
  return (user as Admin).role !== undefined;
}

function setRoleZero(user: User | Admin){
  if (isAdmin(user)){
    user.role = 0
  } else{
    throw new Error('utilizaturl nu este Admin')
  }
}