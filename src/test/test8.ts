/*
Необходимо написать функцию сортировки любых
объектов, которые имеют id по убыванию и по возрастанию
*/

const data = [
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 3, name: "Надя" },
  { id: 4, name: "dorin" },
  { id: 6, name: "Florin" },
  { id: 5, name: "Albastrel" },
  { id: 7, name: "Viorel" },
];

//rezolvare
interface ID {
  id: number;
}

function sort<T extends ID>(data: T[], type: "ascendent" | "descendent" = "ascendent"): T[] {
  return data.sort((a, b) => {
    switch (type) {
      case "ascendent":
        return a.id - b.id;
      case "descendent":
        return b.id - a.id;
    }
  });
}

console.log("Sortam Ascendent", sort(data));
console.log("Sortam Descendent", sort(data, "descendent"));
