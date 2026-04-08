/*
Необходимо написать функцию группировки, которая принимает массив объектов
и его ключ, производит группировку по указанному ключу и возращает
сгруппированный объект.
Пример:
[
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
];

При группироке по 'group' ---->

{
	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
	'2': [ { group: 2, name: 'c' } ]
}
    */

interface Data {
  group: number;
  name: string;
}

const dataTest9: Data[] = [
  { group: 1, name: 'a' },
  { group: 1, name: 'b' },
  { group: 2, name: 'c' },
];

/* Varinata chatGPT =>
function groupBy<T, K extends keyof T>(array: T[], key: K) {
  return array.reduce((acc, item) => {
    const group = item[key] as string | number;

    if (!acc[group]) {
      acc[group] = [];
    }

    acc[group].push(item);

    return acc;
  }, {} as Record<string | number, T[]>);
}

const grouped = groupBy(dataTest9, "group");

console.log(grouped); 
*/

//Varinata Prof =>
interface IGroup<T> {
  [key: string]: T[];
}

type keyType = string | number | symbol;

function group<T extends Record<keyType, any>>(
  array: T[],
  key: keyof T,
): IGroup<T> {
  return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
    let curEl = map[item[key]];
    if (Array.isArray(curEl)) {
      curEl.push(item);
    } else {
      curEl = [item];
    }
    map[item[key]] = curEl;
    return map;
  }, {});
}

const res = group<Data>(dataTest9, 'group');
console.log(res);
