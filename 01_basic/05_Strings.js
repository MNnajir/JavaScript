const name = "Najir"
const repCount = 50
// console.log(name + repCount + "value");

console.log(`hello my name is ${name} and my repCount is ${repCount}`); //hello my name is Najir and my repCount is 50


const gameName = new String ("Najir-MN-COM")
console.log(gameName[0]);  //N
console.log(gameName.__proto__); //{}
console.log(gameName.length); //5
console.log(gameName.toUpperCase()); //NAJIR
console.log(gameName.charAt(2)); //j
console.log(gameName.indexOf('t')); //-1


const newString = gameName.substring(0,4)
console.log(newString);  //Naji
const anotherString = gameName.slice(-8,4)
console.log(anotherString); // Naji

const newStringOne = "  Nausad  "
console.log(newStringOne); // space 
console.log(newStringOne.trim()); //removes whitespace from both ends of this string and returns a new string,

const url = "https://abdulnajiransari.com.np/Najir%30Ansari"
console.log(url.replace('%30' , '-')); //https://abdulnajiransari.com.np/Najir-Ansari
console.log(url.includes('Najir')); //true
console.log(url.includes('Irfan')); //false
console.log(gameName.split('-')); // [ 'Najir', 'MN', 'COM' ]













