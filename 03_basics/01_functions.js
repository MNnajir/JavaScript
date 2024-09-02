function sayMyName(){
    console.log("N")
    console.log("A")
    console.log("J")
    console.log("I")
    console.log("R")

}
//sayMyName()
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
    
}
//addTwoNumbers(3,4)
function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    //return result
    return number1+number2
}
const result = addTwoNumbers(4,5)
//console.log("Result:", result)
function loginUserMessage(username) {
    if (username===undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Najir"));
//console.log(loginUserMessage());

function loginUserMessage(username="Sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Najir"));
//console.log(loginUserMessage("Najir"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000));
const user = {
    username:"Najir",
    price:399
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
    
}
handleObject(user)
handleObject({
    username: "sam",
    price: 899
})
const myNewArray = [200, 300, 100, 1000]
function returnSecondValue(getArray){
    return getArray[1] 
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 100, 1000]));


