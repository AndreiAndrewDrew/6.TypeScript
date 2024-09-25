"use strict";
const skill = [1, "Dev"];
const id = skill[0];
const skillName = skill[1];
skill.push('sdkjasdbfkj');
// const sdadf = skill[2] //nu ne putem adressa la al 3 element,ca e tipizat fix 2 elemenet [number, string]
skill.pop();
const [id2, skillName2] = skill; //facem destructurizatioa lui tuple
//informatsie adugatoare cu spread operator
const arr = [1, 'sfdsd', true, true, false];
