// singleton
// object.create
// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Najir" ,
    "full name": "Najir Ansari",
    [mySym]: "mykey1" ,
    age: 25 , 
    Location: "Janakpur" ,
    email: "najir@google.com" , 
    isLoggedIn: false ,
    LastLoggedinDays: ["Monday" , "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "najir@chatgpt.com"
// object.freeze(JsUser)
JsUser.email = "najir@microsoft.com"
console.log(JsUser);
JsUser.greeting = function() {
    console.log("Hello Js User")
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





