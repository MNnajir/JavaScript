// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);  
}

// Map

const map = new Map()
map.set('Np', "Nepal")
map.set('USA', "United State Of America")
map.set('IN', "India")
//map.set('Np', "Nepal")
//console.log(map);
for (const [key, value] of map) {
    //console.log(key, ':-', value);
    
}

// const myObject = {
//     game1 : 'NFS',
//     game2: 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } wrong code 
