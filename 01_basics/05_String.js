const name="manav"
const repoCount=50
console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('manavvv-tk-com')
// console.log(gameName[0]);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="  manav  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%","-"));

console.log(url.includes('manav'));
console.log(gameName.split("-"));