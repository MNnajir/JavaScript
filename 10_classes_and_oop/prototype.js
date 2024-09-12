// let myName = "Najir"
// let myChannel = "chai"
// console.log(myName.trueLenght);

let myHero = ["thor","spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }

}
Object.prototype.najir = function(){
    console.log(`Najir is present in all objects`);
}
Array.prototype.heynajir = function(){
    console.log(`Najir says hello`);
    
}
// heroPower.najir();
// myHero.najir();
// myHero.heynajir();

// inheritance 
const User = {
    name: "Najir",
    email: "najir@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailabe: false
}
const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// mordern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// Test the inheritance chain
console.log(TASupport.isAvailabe);   // Output: false (from TeachingSupport)
console.log(TASupport.makeVideo);    // Output: true (from Teacher)
console.log(TASupport.name);         // Output: "Najir" (from User)
console.log(TASupport.email);        // Output: "najir@google.com" (from User)
console.log(TASupport.makeAssignment);  // Output: 'Js assignment' (from TASupport)
console.log(TASupport.fullTime);     // Output: true (from TASupport)

let anotherUsername = "ChaiAurCode   "
String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`); 
}

anotherUsername.trueLenght()
"Najir".trueLenght()
"iceTea".trueLenght()