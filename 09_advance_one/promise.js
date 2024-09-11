// promise

const promiseOne = new Promise(function(resolve, reject){
    // Do an asyn task 
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    })
} ,1000)

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(() =>{
        console.log('Async task 2');
        resolve()
    } ,1000);
}).then(() => {
    console.log("Async 2 resolved");
    
})

promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({userName: "chai" , email: "abdul@example.con"})
    } ,1000)
})
promiseThree.then(function(data){
    console.log(data);
})  

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        //let error = false
        let error = true
        if (!error) {
            resolve({userName:"Najir", password:"1234"})
        }else{
            reject('ERROR: Something went worng')
        }
    } , 1000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.userName 
}).then((userName) =>{
    console.log(userName);
}).catch((error) =>{
    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        //let error = false
        let error = true
        if (!error) {
            resolve({userName:"Javascript", password:"1234"})
        }else{
            reject('ERROR: JS went worng')
        }

    } , 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/MNnajir');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/MNnajir')
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data);
})
.catch((error) => console.log(error));

// promise.all
