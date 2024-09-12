
class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }
    static createId(){
        return`123`
    }
}
const Najir = new User("Najir");
Najir.logMe();
//console.log(Najir.createId());

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email
    }
}

const teacher = new Teacher("Najir", "najir@gmail.com");
console.log(teacher);
teacher.logMe()

//console.log(teacher.createId());
