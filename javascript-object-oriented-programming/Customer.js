export class Customer {
    name;
    _document;

    get cpf(){
        return this._document;
    }

    constructor(name, document){
        this.name = name;
        this._document = document;
    }
}