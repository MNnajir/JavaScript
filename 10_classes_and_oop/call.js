function SetUsername(username){
    //complex DB calls
    this.username = username;
    console.log("called");
}

function createUser (username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("Chai", "chai@fb.com", "1234")
console.log(chai);
