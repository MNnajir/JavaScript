// javascript is dynamic language 

 //datatypes
 // primitive datatypes

 // 7 types = String , Number , Boolean , null , undefined , Symbol , BigInt

 const score = 100 // return of number
 console.log(typeof score) 
 const scoreValue = 100.3 // return of Number
 console.log(typeof scoreValue) // output 100.3
 const isLoggedIn = true // return of boolean
 console.log(typeof isLoggedIn) // output true
 const outsideTemp = null // return of null
 console.log(typeof outsideTemp) 
 let userEmail;
 console.log( typeof userEmail) // output undefined
const id = Symbol ('123')
console.log(typeof id) // output symbol
 const anotherId = Symbol('123')
 console.log(id === anotherId) // output false
 const bigInt = 2345689n // return of BigInt
 console.log(typeof bigInt) // output BigInt

 // Reference (Non-Primitive)
 // Object , Array , Function

 const heros = [ "Najir" , "Irfan" , "Amrendra"]
 let myobj = {
    name : "Najir" ,
    age : 25
 }
 console.log(typeof heros) // output object
 console.log(typeof myobj) // output object

 const myFunction = function(){
    console.log("hello world")
 }
 console.log(typeof myFunction) // output function