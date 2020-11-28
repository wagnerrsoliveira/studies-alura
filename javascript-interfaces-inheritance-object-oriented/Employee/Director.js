import { Employee } from "./Employee.js"

export class Director extends Employee{
    constructor(name, salary, document){
        super(name, salary, document)
        this._bonus = 2;
    }
}