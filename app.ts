function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

//Analog cu functie sageata
const getFullNameArrow = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

console.log(getFullName('Andrew', 'Boll'));