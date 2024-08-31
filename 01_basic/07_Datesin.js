// dates is object 

let myDate = new Date()
console.log(myDate) // output: 2023-03-15T10:30:
console.log(myDate.toString())
console.log(myDate.getFullYear());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString()) // 2023-03-14T10:30:
console.log(typeof myDate);

let myCreateDate = new Date(2024,0,22)
console.log(myCreateDate); // output: 2024-01-22T00:00:
console.log(myCreateDate.toString());
let myCreateDateOne = new Date(2024,0,23,5,3)
console.log(myCreateDateOne); // output: 2024-01-23T05:03
console.log(myCreateDateOne.toLocaleString());
let myCreateDateTwo = new Date("2024-8-31")
console.log(myCreateDateTwo.toLocaleString());
 
let myTimeStamp = Date.now()
console.log(myTimeStamp); // output: 1678763400000
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday: "long"
})




