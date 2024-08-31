// array is object   
// it resizable and zero index

const myArr = [0,1,2,3,4,5]
const myHeros = ["Nausad","SRK"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);
console.log(myArr2);
console.log(myHeros)

// Array method 

// myArr.push(9)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)
//myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice , splice

console.log("A" ,myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" ,myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C" ,myArr);







