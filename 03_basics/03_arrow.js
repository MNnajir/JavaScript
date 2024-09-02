const user = {
    usename: "Najir",
    price: 999 ,
    welcomeMesssage: function(){
        console.log((`${this.usename}, Welcome to Website`));
        //console.log(this);
        
        
    }  
}
// user.welcomeMesssage()
// user.usename = "sam"
// user.welcomeMesssage()
//console.log(this);

 //function chai() {
    //let username = "Najir"
   // console.log(this.username);
// }
 //chai()
 const chai= function () {
    let username = "Najir"
    //console.log(this);
 }
 //chai()
//  const addTwo = (num1,num2) => {
//     return num1 + num2
//  }
//const addTwo = (num1,num2) =>num1 + num2
//const addTwo = (num1,num2) =>(num1 + num2)
const addTwo = (num1,num2) =>({username:"Najir"})

console.log(addTwo(3,4));

//const myArray =[2,3,4,5,6,7,8]
//myArray.forEach()

 