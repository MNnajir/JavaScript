const User = {
    _email: 'n@Number.com' ,
    _password: '123456',

    get email(){
        return this._email.toLowerCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toLowerCase()
    },
    set password(value){
        this._password = value
    }

}

const tea = Object.create(User)
console.log(tea.email);
console.log(tea.password);

