export class Customer {
   
    get cpf(){
        return this._document;
    }

    constructor(name, document, password){
        this.name = name;
        this._document = document;
        this._password = password;
    }

    authenticate(password){
        return password === this._password;
    }
}